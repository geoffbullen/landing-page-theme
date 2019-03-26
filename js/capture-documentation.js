$(function() {
	$( ".aui-nav-item" ).on( "click", function() {
		$( ".aui-nav > li" ).removeClass( "aui-nav-selected" );
		$(this).closest( "li" ).addClass( "aui-nav-selected" );
		
		$( ".ws-docu-section" ).css( "display", "none" );
		var sectionClicked = $(this).text().trim();
		$( "div:contains('" + sectionClicked + "')" ).closest( ".ws-docu-section" ).css( "display", "block" );
	});
	$( ".ws-docu-section" ).css( "display", "none" );
	$( ".aui-nav-item:contains('About WallSync Capture')" ).click();
});