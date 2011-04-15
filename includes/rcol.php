

<div id="rcol">
<?php
$technologyString = <<<TECHNOLOGY
<div class="rnav_container">
<h2>Technology:</h2>
	<ul class="rnav">
		<li><a href="technology/technology.html#1">Network Efficiency</a></li>
		<li><a href="technology/technology.html#2">Quality</a></li>
		<li><a href="technology/technology.html#3">Scalability</a></li>
		<li><a href="technology/technology.html#4">Managed Grid</a></li>
		<li><a href="technology/technology.html#5">Device Independent</a></li>
	</ul>
</div>
TECHNOLOGY;

$ecosystemString = <<<ECOSYSTEM
<div class="rnav_container">
<h2><a href="ecosystem/ecosystem.html">Ecosystem:</a></h2>
	<ul class="rnav">
		<li><a href="ecosystem/technology.html">RayV Technology</a></li>
		<li><a href="ecosystem/grid.html">RayV Grid</a></li>
		<hr/>
		<li><a href="ecosystem/broadcaster.html">RayV HDX Encoder</a></li>
		<li><a href="ecosystem/player.html">RayV Player</a></li>
		<li><a href="ecosystem/dashboard.html">RayV Dashboard</a></li>
		<li><a href="ecosystem/monitor.html">RayV Monitor</a></li>
	</ul>
</div>
ECOSYSTEM;

$solutionsString = <<<SOLUTIONS
<div class="rnav_container">
<h2><a href="solutions/solutions.html">Solutions:</a></h2>
	<ul class="rnav">
		<li><a href="solutions/deliverysolution.html">RayV Core</a></li>
		<li><a href="solutions/rayvturnkey.html">RayV Turnkey</a></li>
		<li><a href="solutions/uplinkoverip.html">Uplink over IP</a></li>
	</ul>
</div>
SOLUTIONS;

$companyString = <<<COMPANY
<div class="rnav_container">
<h2>Company:</h2>
	<ul class="rnav">
		<li><a href="company/contactus.html">Contact Us</a></li>
		<li><a href="company/management.html">Management</a></li>
		<li><a href="http://blog.rayv.com">RayV Blog &raquo;</a></li>
		<li><a href="company/careers.html">Careers</a></li>
	</ul>
</div>
COMPANY;

$partnersString = <<<PARTNERS
<div class="rnav_container">
<h2>Partners and Clients:</h2>
	<ul class="rnav">
		<li><a href="partnersandclients/casestudies.html">Case Studies</a></li>
		<li><a href="partnersandclients/partners.html">Partners</a></li>
		<li><a href="partnersandclients/channels.html">Channels</a></li>
	</ul>
</div>
PARTNERS;

$dashboardString = <<<DASHBOARD
<div class="rnav_container">
<h2>Downloads:</h2>
	<ul class="rnav">
		<li><a>RayV HDX Encoder</a></li>
		<li><a href="experience/experience.html">RayV Player (Mac / Win)</a></li>
	</ul>
<h3>Mobile Downloads</h3>
	<ul class="rnav">
		<li><a>RayV Player for Android</a></li>
		<li><a>RayV Player for iOS</a></li>
	</ul>
<h2>Tools:</h2>
	<ul class="rnav">
		<li><a href="http://www.speedtest.net">Speedtest »</a></li>
	</ul>
</div>
DASHBOARD;

$broadcastermanualstring = <<<BROADCASTERMANUALS
<a class="readmore_white" href="documentation/manuals.html#broadcaster">Encoder Manual</a>
BROADCASTERMANUALS;

$playermanualstring = <<<PLAYERMANUALS
<a class="readmore_white" href="documentation/manuals.html#player">Player Manual</a>
PLAYERMANUALS;

$dashboardmanualstring = <<<DASHBOARDMANUALS
<a class="readmore_white" href="documentation/manuals.html#dashboard">Dashboard Manual</a>
DASHBOARDMANUALS;

$monitormanualstring = <<<MONITORMANUALS
<a class="readmore_white" href="documentation/manuals.html#monitor">Monitoring Manuals</a>
MONITORMANUALS;

if ($section == "technology") {
	echo $technologyString;
}
if ($section == "ecosystem") {
	echo $ecosystemString;
}

if ($section == "solutions") {
	echo $solutionsString;
}
if ($section == "company") {
	echo $companyString;
}
if ($section == "partners") {
	echo $partnersString;
}
if ($section == "dashboard") {
	echo $dashboardString;
}
?>
	<div id="contactbox">
		<div class="bottomborder">
			<h3>Contact Us:</h3>
		</div>
		<div class="bottomborder">
			<a href="mailto:info@rayv.com">info@rayv.com</a>
		</div>
		<div>
			<p>1 (323) 860-0735</p>
		</div>
	</div>
<?php	
if ($pagetitle == "RayV Broadcaster") {
	echo $broadcastermanualstring;
}
if ($pagetitle == "RayV Player") {
	echo $playermanualstring;
}
if ($pagetitle == "RayV Dashboard") {
	echo $dashboardmanualstring;
}
if ($pagetitle == "RayV Monitor") {
	echo $monitormanualstring;
}
if ($pagetitle == "RayV Turnkey") {
	echo '<a class="readmore_white" href="partnersandclients/casestudies.html">Read Case Studies</a>';
}
?>
</div>