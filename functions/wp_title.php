<?php
	/**
	 * Provides a standard format for the page title depending on the view. This is
	 * filtered so that plugins can provide alternative title formats.
	 *
	 * @param       string    $title    Default title text for current view.
	 * @param       string    $sep      Optional separator.
	 * @return      string              The filtered title.
	 * @package     mayer
	 * @subpackage  includes
	 * @version     1.0.0
	 * @since       1.0.0
	 */
	function mayer_wp_title( $title, $sep ) {
		global $paged, $page;

		if ( is_feed() ) {
			return $title;
		} // end if

		// Add the site name.
		$title .= get_bloginfo( 'name' );

		// Add the site description for the home/front page.
		$site_description = get_bloginfo( 'description', 'display' );
		if ( $site_description && ( is_home() || is_front_page() ) ) {
			$title = "$title $sep $site_description";
		} // end if

		// Add a page number if necessary.
		if ( $paged >= 2 || $page >= 2 ) {
			$title = sprintf( __( 'Strona %s', 'mayer' ), max( $paged, $page ) ) . " $sep $title";
		} // end if

		return $title;

	} // end mayer_wp_title
	add_filter( 'wp_title', 'mayer_wp_title', 10, 2 );
