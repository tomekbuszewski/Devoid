<?php
	/*
	 * Post options
	 */

	// add support for featured image
	add_theme_support('post-thumbnails');

	// image sizes

    // remove old sizes
    function remove_default_image_sizes( $sizes) {
        unset($sizes['thumbnail']);
        unset($sizes['medium']);
        unset($sizes['large']);
        return $sizes;
    }

    add_filter('intermediate_image_sizes_advanced','remove_default_image_sizes');


    // adding own sizes
    if(function_exists('add_image_size')){
        //add_image_size('full_width',800,0,false);
        //add_image_size('small_pic',400,0,false);
        //add_image_size('full width - widescreen',640,360);
    }