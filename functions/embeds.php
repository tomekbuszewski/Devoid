<?php
	/*
	 * Embeds
	 */

	// YOUTUBE
	function youtubeShortcode($id) {
		return '<div class="embed-element embed-youtube"><iframe src="//www.youtube.com/embed/'.$id['id'].'?showinfo=0" frameborder="0" allowfullscreen></iframe></div>';
	}

	// SHORTCODES INIT
	function registerShortcodes() {
		add_shortcode('youtube', 'youtubeShortcode');
	}

	add_action('init', 'registerShortcodes');
