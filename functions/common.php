<?php
	/**
	 * Common functions and hacks
	 */

	// DISABLE ADMIN BAR
	add_filter('show_admin_bar', '__return_false');

	// REGISTER MAIN MENU
	function register_header_menu() {
		register_nav_menu('header-menu', __('header'));
		register_nav_menu('footer-menu', __('footer'));
	};

	add_action('init', 'register_header_menu');

	function get_prev_posts() {
		$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
		$paged = $paged + 1;
		return get_bloginfo('url').'/page/'.$paged.'/?plain=true';
	}
