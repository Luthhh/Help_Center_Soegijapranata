import{D as a}from"./jquery.dataTables-7abb331e.js";import"./dataTables.bootstrap5-0faf5890.js";import"./jquery-1242cc52.js";import"./_commonjsHelpers-042e6b4d.js";import"./jquery-f89b34b5.js";$.fn.dataTable=a;$(document).ready(function(){new a("#basic-datatable",{keys:!0,language:{paginate:{previous:"<i class='ri-arrow-left-s-line'>",next:"<i class='ri-arrow-right-s-line'>"}},drawCallback:function(){$("#basic-datatable_paginate").addClass("pagination-rounded")}}),new a("#datatable-buttons",{lengthChange:!1,buttons:["copy","print"],language:{paginate:{previous:"<i class='ri-arrow-left-s-line'>",next:"<i class='ri-arrow-right-s-line'>"}},drawCallback:function(){$("#basic-datatable_paginate").addClass("pagination-rounded")}}),new a("#selection-datatable",{select:{style:"multi"},language:{paginate:{previous:"<i class='ri-arrow-left-s-line'>",next:"<i class='ri-arrow-right-s-line'>"}},drawCallback:function(){$("#basic-datatable_paginate").addClass("pagination-rounded")}}),new a("#alternative-page-datatable",{pagingType:"full_numbers",drawCallback:function(){$("#basic-datatable_paginate").addClass("pagination-rounded")}}),new a("#scroll-vertical-datatable",{scrollY:"350px",scrollCollapse:!0,paging:!1,language:{paginate:{previous:"<i class='ri-arrow-left-s-line'>",next:"<i class='ri-arrow-right-s-line'>"}},drawCallback:function(){$("#basic-datatable_paginate").addClass("pagination-rounded")}}),new a("#scroll-horizontal-datatable",{scrollX:!0,language:{paginate:{previous:"<i class='ri-arrow-left-s-line'>",next:"<i class='ri-arrow-right-s-line'>"}},drawCallback:function(){$("#basic-datatable_paginate").addClass("pagination-rounded")}}),new a("#complex-header-datatable",{language:{paginate:{previous:"<i class='ri-arrow-left-s-line'>",next:"<i class='ri-arrow-right-s-line'>"}},drawCallback:function(){$("#basic-datatable_paginate").addClass("pagination-rounded")},columnDefs:[{visible:!1,targets:-1}]}),new a("#row-callback-datatable",{language:{paginate:{previous:"<i class='ri-arrow-left-s-line'>",next:"<i class='ri-arrow-right-s-line'>"}},drawCallback:function(){$("#basic-datatable_paginate").addClass("pagination-rounded")},createdRow:function(e,l,i){l[5].replace(/[\$,]/g,"")*1>15e4&&$("td",e).eq(5).addClass("text-danger")}}),new a("#state-saving-datatable",{stateSave:!0,language:{paginate:{previous:"<i class='ri-arrow-left-s-line'>",next:"<i class='ri-arrow-right-s-line'>"}},drawCallback:function(){$("#basic-datatable_paginate").addClass("pagination-rounded")}}),new a("#fixed-columns-datatable",{scrollY:300,scrollX:!0,scrollCollapse:!0,paging:!1,fixedColumns:!0}),$(".dataTables_length select").addClass("form-select form-select-sm"),$(".dataTables_length label").addClass("form-label"),new a("#fixed-header-datatable",{responsive:!0,language:{paginate:{previous:"<i class='ri-arrow-left-s-line'>",next:"<i class='ri-arrow-right-s-line'>"}},drawCallback:function(){$("#basic-datatable_paginate").addClass("pagination-rounded")}})});
