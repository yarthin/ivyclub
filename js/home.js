
    jQuery(document).ready(function($){
        $( ".go-ss-2" ).click(function() {
            $(".next").trigger( "click" );
            return false;
        });
        $( ".go-ss-3" ).click(function() {
            var i = 0;
            while (i < 2) {
                $(".next").trigger( "click" );
                i++;
            }
             return false;
        });
        $( ".go-ss-4" ).click(function() {
            $(".next").trigger( "click" );
            return false;
        });
    });
    
	 $(".openframe").fancybox({
       maxWidth: 800,
      maxHeight: 600,
      fitToView: false,
      width: '80%',
      height: '80%',
      autoSize: true,
      closeClick: true,
      openEffect: 'none',
      closeEffect: 'none'

    });
    
    $(".fancybox").fancybox({
    fitToView: true, // avoids scaling the image to fit in the viewport
      width: '80%',
      height: '80%',
      autoSize: true,
      closeClick: true,
      openEffect: 'none',
      closeEffect: 'none',
      scrolling: 'no',
    beforeShow: function () {
        // set size to (fancybox) img
        $(".fancybox-image").css({
            "width": 800,
            "height": 600
            
        });
        // set size for parent container
        this.width = 800;
        this.height = 600;
    }
});
	