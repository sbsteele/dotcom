<? $domainname = $_SERVER['HTTP_HOST']; ?>
<!doctype html>	

<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>		<html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>		<html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>		<html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"> <!--<![endif]-->
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<? echo	"<title>" . $pagetitle . "</title>"; ?>

<script type="text/javascript">
	var base = document.domain;
	var port = window.location.port
	document.write('<base href="http://' + base + ':' + port + '" />');
</script>
<meta name="description" content="RayV Optimized Coud Streaming">
<meta name="description" content="The Leading TV over IP Platform" /> 
<meta name="keywords" content="live, TV, tv over IP platform, online, video, online video platform, tv everywhere, video player, mobile video" />

<meta name="viewport" content="width=device-width, initial-scale=1.0">


<!-- Place favicon.ico and apple-touch-icon.png in the root of your domain and delete these references -->
<link rel="shortcut icon" href="/favicon.ico">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">

<link rel="stylesheet" href="css/style.css?v=1">

<!-- All JavaScript at the bottom, except for Modernizr which enables HTML5 elements & feature detects-->
<script src="js/modernizr-1.6.min.js"></script>
<script src="js/iThing.js"></script>
<script src="videoplayer/jwplayer.js"></script>
</head>

<body>

<div id="<? if ($layout=="homepage") { echo $layout; } ?>wrapper">
<header>
	<div class="innercol clearfix">
		<nav id="topnav">
			<ul>
				<li class="topnavL1 navhomelink ir">
					<a href="index.html">Home</a>
					<div class="topnavL2"></div>
				</li>
				<li class="topnavL1">
					<a href="ecosystem/ecosystem.html">Ecosystem</a>
					<div class="topnavL2"></div>
				</li>
				<li class="topnavL1">
					<a href="solutions/solutions.html">Solutions</a>
					<div class="topnavL2"></div>
				</li>
				<li class="topnavL1">
					<a href="partnersandclients/casestudies.html">Partners &amp; Clients</a>
					<div class="topnavL2"></div>
				</li>
				<li class="topnavL1">
					<a href="experience/experience.html">Experience RayV</a>
					<div class="topnavL2"></div>
				</li>
			</ul>
			<div id="contactsales">
				<span class="email"><a href="company/contactus.html">Contact Us</a></span><span class="phone">1 (323) 860-0735</span>
			</div>
		</nav>
	</div>
</header>
<div id="main" class="png-bg">
	<div class="innercol clearfix <? echo $layout; ?> ">
