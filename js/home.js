
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

    });
