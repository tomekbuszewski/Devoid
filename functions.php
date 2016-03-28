<?php
	/*
	 * Collection of functions
	 *
	 * Scattered for better understanding and organisation
	 */

	/*
	 * HEADER MANAGEMENT
	 */
	include('functions/wp_title.php');

	/*
	 * POST OPTIONS
	 */
	@include('functions/post_options.php');

	/*
	 * SCRIPTS AND STYLESHEETS
	 */
	@include('functions/design.php');

	/*
	 * CUSTOM POST TYPES
	 */
	@include('functions/custom_types.php');

	/*
	 * COMMON
	 */
	@include('functions/common.php');

	/*
	 * EMBEDS
	 */
	@include('functions/embeds.php');

	/*
	 * ADMIN HACKS
	 */
	@include('functions/admin_hacks.php');
