
$(document).ready(function () {
    let selects = $('select.select-bs');
    selects.each(function (i, e) {
        // let randomClass  = classes[Math.floor(Math.random() * classes.length)];
        $(this).bsSelectDrop({
            btnClass: 'btn btn-outline-secondary',
            btnWidth: 'auto',
            btnEmptyText: 'Seleccione',
            darkMenu: false,
            showSelectionAsList: false,
            showActionMenu: true,
            showSelectedText: (count, total) => { return `${count} de ${total} seleccionados` }
        });
    });

    $(".filtros-content").hide();
    $("#filtrosBtn").on('click', function () {
		$(".filtros-content").fadeToggle();
	});
});
var table = $('#example').DataTable(
    {

        responsive: true,
        "language": {
            "lengthMenu": "#Filas _MENU_ ",
            "emptyTable": "Ningún dato disponible en esta tabla",
            "zeroRecords": "No se encontró resultados",
            "info": "#Registros: _TOTAL_ ",
            "infoEmpty": "No se encontró resultados",
            "infoFiltered": "(filtrados de _MAX_ registros)",
            "paginate": {
                "first": "Primero",
                "last": "Último",
                "next": "Siguiente",
                "previous": "Anterior"
            },
            "search": "Buscar:",
            "searchPlaceholder": "Buscar"
        },
        "bDestroy": true

    }

);
new $.fn.dataTable.FixedHeader(table);