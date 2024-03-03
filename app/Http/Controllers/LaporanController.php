<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use App\Models\Topic;
use Illuminate\Http\Request;

use Illuminate\Support\Str;
use Illuminate\Support\Carbon;


class LaporanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if(session('role') == 1){
            $data = Ticket::all();
        } else if(session('role') == 2){
            $data = Ticket::where('sender_id', session('user_id'))->get();
        } else if(session('role') > 2){
            $role = session('role');

            $data = Ticket::whereHas('topik', function ($query) use ($role) {
                $query->where('cs_assigned', $role);
            })->get();
        }
        $data = Ticket::all();
        $widget = [
            $data->count(),
        ];

        return view("apps.data-laporan", [
            'data' => $data
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $topik = Topic::all();
        return view("apps.detail-laporan", [
            'topik' => $topik
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'judul' => 'required|string',
            'deskripsi' => 'required|string',
            'topik' => 'required|integer',
        ]);
    
        $tiket = new Ticket();
        $tiket->judul = $validatedData['judul'];
        $tiket->deskripsi = $validatedData['deskripsi'];
        $tiket->topik_id = $validatedData['topik'];
        $tiket->user_id = session('user_id');
        $tiket->status_layanan = "diproses";
        $tiket->is_public = 0;
        $tiket->takeover_id = null;
        $tiket->is_active = 1;
        $tiket->chat_api_id = now()->format('YmdHis') . Str::random(5);

        $tiket->save();
    
        return response()->json(['message' => 'Message stored successfully', 'status' => 'success', 'tiket_id' => $tiket->id], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $laporan = Ticket::with('takeover')->find($id);
        $topik = Topic::all();
        return view("apps.detail-laporan", [
            'laporan' => $laporan,
            'topik' => $topik
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function takeover(Request $request, string $id){
        $validatedData = $request->validate([
            'takeover_id' => 'required|integer'
        ]);
        $tiket = Ticket::find($id);
        $tiket->takeover_id = intval($validatedData['takeover_id']);
        $tiket->save();

        return response()->json(['status' => 'success', 'takeover_id' => $tiket->takeover_id]);
    }

    public function akhiripeng(string $id){
        $tiket = Ticket::find($id);
        $tiket->is_active = !$tiket->is_active;
        
        if($tiket->is_active == 0){
            $tiket->status_layanan = "ditutup";
        } else {
            $tiket->status_layanan = "diproses";
        }

        $tiket->save();

        return response()->json(['status' => 'success', 'is_active' => $tiket->is_active]);
    }
}