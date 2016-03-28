<?php
	/**
	 * Scripts and stylesheets
	 */

	// Deregister old scripts
	function deregister_scripts() {
		wp_deregister_script('jquery');
	}

	// Register new scripts
	function register_scripts() {
		wp_enqueue_script(
      'scripts',
      get_template_directory_uri().'/_js/index.js',
      null,
      null,
      1
    );
	}

	// Deregister old styles
	function deregister_styles() {
		wp_deregister_style('contact-form-7');
	}

	// Register new styles
	function register_styles() {
    wp_register_style(
      'fonts-style',
      ''
    );
		wp_register_style('main-style', get_template_directory_uri().'/style.css', null, '1', 'all');

		wp_enqueue_style('fonts-style');
		wp_enqueue_style('main-style');
	}

	// Remove Emobji support
	remove_action('wp_head', 'print_emoji_detection_script', 7);
	remove_action('wp_print_styles', 'print_emoji_styles');

	// Hook
	add_action('wp_enqueue_scripts', 'deregister_scripts');
	add_action('wp_enqueue_scripts', 'register_scripts');

	add_action('wp_enqueue_scripts', 'deregister_styles');
	add_action('wp_enqueue_scripts', 'register_styles');
