/// <reference path="jquery-1.4.1-vsdoc.js" />

$(document).ready(function() {

	$('.channels-wrapper').scrollable({ 
        nextPage: '.next-items',
        prevPage: '.prev-items',
        vertical: false,
        clickable: false,
        size: 5
    });

	$('#channels-list li').click(function(e) {
		$('#channels-list li').removeClass('selected');
		$(this).addClass('selected');
		initializeChannel($(this).attr('title'));
	});

	// Select the first channel
	$('#channels-list li:first-child').click();
});

function initializeChannel(channelId) {
	var channel = findChannelById(channelId);
	if (channel.Type == 0) {
		embedRayvPlayer1(channel.ChannelKey);
	}
	else if (channel.Type == 1) {
		embedSSMPlayer(channel);
	}
	else {
		throw new Exception('Channel type is not supported: ' + channel.Type);
	}
}

function findChannelById(channelId) {
	for (var i = 0; i < channels.length; i++) {
		if (channels[i].ChannelId == channelId) {
			return channels[i];
		}
	}

	return null;
}

function embedSSMPlayer(channel) {
	rayvssm.initializePlayer({
	  'hostElement': 'player',		// The container element ID.
	  'affiliate': channel.SSMAffiliate,
	  'stream': channel.SSMStream,
	  'streamMode': rayvssm.streamMode.Flash,	// Hybrid mode enables you to change the qualities
	  'playerType': rayvssm.playerType.Flash
	});
}

function embedRayvPlayer1(channelKey) {
	Rayv.Embed('player', {
		'ChannelID': channelKey,
		'Affiliate': 'RayV',
		'AllowDVR': true,
		'AllowDetach': true
	});
}