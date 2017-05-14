<?php

function enqueue_cdn_jquery(){
    wp_deregister_script('jquery');  //removes core jquery
    wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js');  //adds cdn jquery
    wp_enqueue_script('jquery');
}
add_action('wp_enqueue_scripts', 'enqueue_cdn_jquery');

?>