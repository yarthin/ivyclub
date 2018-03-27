<?php
function combine_my_css($array_files, $destination_dir, $dest_file_name){

    if(!is_file($destination_dir . $dest_file_name)){ //continue only if file doesn't exist
        $content = "";
        foreach ($array_files as $files){ //loop through array list
            $content .= file_get_contents($files); //read each file
        }

        //You can use some sort of minifier here 
        //minify_my_js($content);

        $new_file = fopen($destination_dir . $dest_file_name, "w" ); //open file for writing
        fwrite($new_file , $content); //write to destination
        fclose($new_file); 




        
        return '<link type="text/css" href="'. $destination_dir . $dest_file_name.'" rel="stylesheet" />'; //output combined file
    }else{
        //use stored file
        $filemtime = filemtime(dirname(__FILE__) . '/../css/' . $filename);
        echo "<link type='text/css' href='$destination_dir/$dest_file_name?$filemtime' rel='stylesheet' />\n";
    }

}


$files = array(
    'css/jquery.pagepiling.min.css',
    'css/material-design-iconic-font.min.css',
    'css/pe-icon-7-stroke.css',
    'css/swiper.min.css',
    'css/jquery.fancybox.min.css',
    'css/selectcss/main-prod.min.css',
    'css/selectcss/select2.min.css'

);

echo combine_my_css($files, 'cache', md5("my_mini_css").".css");


?> 

<?php


function combine_my_js($array_files, $destination_dir, $dest_file_name){

    if(!is_file($destination_dir . $dest_file_name)){ //continue only if file doesn't exist
        $content = "";
        foreach ($array_files as $files){ //loop through array list
            $content .= file_get_contents($files); //read each file
        }

        //You can use some sort of minifier here 
        //minify_my_js($content);

        $new_file = fopen($destination_dir . $dest_file_name, "w" ); //open file for writing
        fwrite($new_file , $content); //write to destination
        fclose($new_file); 

        
        return '<script src="'. $destination_dir . $dest_file_name.'"></script>'; //output combined file
    }else{
        //use stored file
        $filemtime = filemtime(dirname(__FILE__) . '/' . $destination_dir . '/' . $dest_file_name);
        echo "<script src='$destination_dir/$dest_file_name?$filemtime'>\n";
		echo "</script>\n";
    }

}


$files = array(

	'js/selectjs/select2/select2.min.js',
    'js/selectjs/main-prod-one.min.js',
    'js/selectjs/main-prod-two.min.js',
    'js/swiper.jquery.min.js',
    'js/jquery.pagepiling.min.js',
    'js/jquery.mousewheel.pack.min.js',
    'js/jquery.fancybox.pack.js',
    'js/scripts.min.js',
    'js/moment.min.js',
    'js/pikaday.min.js',
    'js/pikaday.jquery.min.js',
    'js/datepicker-slide.js',
    'js/jquery.contactable.min.js',
    'js/jquery.jigowatt.min.js',
    'js/plugins.min.js'  
);

echo combine_my_js($files, 'cache', md5("my_mini_js").".js");


?> 
