<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<!--[if IE]><meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'><![endif]-->
	<title><?php wp_title('–', true, 'right'); ?></title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="apple-touch-icon" href="<?php bloginfo('url'); ?>/apple-touch-icon.png">
	<link rel="apple-touch-icon" sizes="57x57" href="<?php bloginfo('url'); ?>/apple-touch-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="<?php bloginfo('url'); ?>/apple-touch-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="<?php bloginfo('url'); ?>/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="<?php bloginfo('url'); ?>/apple-touch-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="<?php bloginfo('url'); ?>/apple-touch-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="<?php bloginfo('url'); ?>/apple-touch-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="<?php bloginfo('url'); ?>/apple-touch-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="<?php bloginfo('url'); ?>/apple-touch-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="<?php bloginfo('url'); ?>/apple-touch-icon-180x180.png">
	<link rel="icon" type="image/png" href="<?php bloginfo('url'); ?>/favicon-32x32.png" sizes="32x32">
	<link rel="icon" type="image/png" href="<?php bloginfo('url'); ?>/android-chrome-192x192.png" sizes="192x192">
	<link rel="icon" type="image/png" href="<?php bloginfo('url'); ?>/favicon-96x96.png" sizes="96x96">
	<link rel="icon" type="image/png" href="<?php bloginfo('url'); ?>/favicon-16x16.png" sizes="16x16">
	<link rel="manifest" href="<?php bloginfo('url'); ?>/manifest.json">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="<?php bloginfo('url'); ?>/mstile-144x144.png">
	<meta name="theme-color" content="#F1C40F">
	<?php wp_head(); ?>
</head>
<?php
	if(is_front_page()) {
		$logo_tag = 'h1';
	} else {
		$logo_tag = 'h2';
	}
?>
<body itemscope itemtype="http://schema.org/WebPage">
