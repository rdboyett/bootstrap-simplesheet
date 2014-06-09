$(document).ready(function(){
    
    resizePopups();
    
    
    $( window ).resize(function() {
        resizePopups();
      });
    
    
  $('div [data-toggle="popover"]').popover();
  //$('#add-class').popover('show');
  //$('#class-code-container').popover('show');
  //$('#new-worksheet').popover('show');
  
  $('div [data-toggle="tooltip"]').tooltip();
  $('button[data-toggle="tooltip"]').tooltip();
    
});


    function resizeTop(element) {
	var halfScreenHeight = ($(window).height())/2;
	var halfElementHeight = (element.height())/2;
	var top = halfScreenHeight - halfElementHeight;
	element.css({
	    'top': top+"px",
	});
    }
    function resizeLeft(element) {
	var halfScreenWidth = ($(window).width())/2;
	var halfElementWidth = (element.width())/2;
	var left = halfScreenWidth - halfElementWidth;
	element.css({
	    'left': left+"px",
	});
    }
    
    function resizePopups() {
	//resizeTop($("#popup"));
	//resizeLeft($("#popup"));
        $("#height").html($(window).height());
	$("#width").html($(window).width());
    }
    