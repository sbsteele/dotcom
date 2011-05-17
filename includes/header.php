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
	document.write('<base href="http://' + base + (port?':':'') + port + '" />');
</script>
<meta name="description" content="RayV Optimized Coud Streaming">
<meta name="description" content="The Leading TV over IP Platform" /> 
<meta name="keywords" content="live, TV, tv over IP platform, online, video, online video platform, tv everywhere, video player, mobile video" />

<meta name="viewport" content="width=device-width, initial-scale=1.0">


<!-- Place favicon.ico and apple-touch-icon.png in the root of your domain and delete these references -->
<link rel="shortcut icon" href="/favicon.ico">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="css/style.css?v=1">

<!-- All JavaScript at the bottom, except for Modernizr which enables HTML5 elements & feature detects-->
<script src="js/modernizr-1.6.min.js"></script>
<script src="js/iThing.js"></script>
<script src="videoplayer/jwplayer.js"></script>
</head>

<body>

<header>
	<div class="innercol clearfix">
		<nav id="topnav">
			<ul class="sf-menu">
				<li class="topnavL1 navhomelink ir">
					<a href="index.html">Home</a>
				</li>
				<li class="topnavL1">
					<a href="ecosystem/ecosystem.html">Ecosystem</a>
					<ul>
						<li><a href="ecosystem/technology.html">RayV Technology</a></li>
						<li><a href="ecosystem/grid.html">RayV Grid</a></li>
						<li><a href="ecosystem/broadcaster.html">RayV HDX Encoder</a></li>
						<li><a href="ecosystem/player.html">RayV Player</a></li>
						<li><a href="ecosystem/dashboard.html">RayV Dashboard</a></li>
						<li><a href="ecosystem/monitor.html">RayV Monitor</a></li>
					</ul>
				</li>
				<li class="topnavL1">
					<a href="solutions/solutions.html">Solutions</a>
					<ul>
						<li><a href="solutions/deliverysolution.html">RayV Core</a></li>
						<li><a href="solutions/rayvturnkey.html">RayV Turnkey</a></li>
						<li><a href="solutions/uplinkoverip.html">Uplink over IP</a></li>
					</ul>
				</li>
				<li class="topnavL1">
					<a href="partnersandclients/casestudies.html">Partners &amp; Clients</a>
					<ul>
						<li><a href="partnersandclients/casestudies.html">Case Studies</a></li>
						<li><a href="partnersandclients/partners.html">Partners</a></li>
						<li><a href="partnersandclients/channels.html">Channels</a></li>
					</ul>
				</li>
				<li class="topnavL1">
					<a href="experience/experience.html">Experience RayV</a>
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
