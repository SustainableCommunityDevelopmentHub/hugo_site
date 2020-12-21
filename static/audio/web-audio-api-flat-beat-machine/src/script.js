var playing = false,
	curBeat = 0,
	curTempo = 130;

var Play = function() {
	if (playing !== false) {
		var nextBeat = 60000 / curTempo / 4;
		$("li.block").removeClass("ef");
		$("li.block.col_" + curBeat).addClass("ef");
		$("#tracker li.block").removeClass("active");
		$("#tracker li.block.col_" + curBeat).addClass("active");
		
		var tmpAudio;
		$(".soundrow[id^=box] li.block.active.col_" + curBeat).each(function(i){
			tmpAudio = document.getElementById($(this).data('sound_id'));
			if (!tmpAudio.paused) {
				tmpAudio.pause();
				tmpAudio.currentTime = 0.0;
			}
			tmpAudio.play();
		});
		curBeat = (curBeat + 1) % 8;
	}
};
var Stop = function() {
		$(".soundrow[id^=box] li.active").removeClass('active');
		clearInterval(playing);
		playing = false;
		$('.soundrow li').removeClass('ef');
}
$(document).ready(function(){
	$("audio").each(function(i){
		var self = this;
		var $ul = $('<ul id="box_' + this.id + '" class="soundrow">');
		for (j = 0; j < 8; j++) {
			var $li =
				$('<li class="block col_'+j+'">'+self.id+'</li>')
				.click(function(){
					$(this).toggleClass('active');
				})
				.data('sound_id', self.id);
			$ul.append($li);
		} 
		$('<li>').append($ul).appendTo('#beat');
	});

	$(".play").click(function(){

		if (playing === false) {
			curBeat = 0;
			playing = setInterval(Play, 60000 / curTempo / 4);
		} else {
			clearInterval(playing);
			playing = false;
			$("#tracker li.block").removeClass("active");
			$("audio").each(function(){
				this.pause();
			});
		}
	});

	$('.stop').click(function(){
		Stop();
	});
	$('.pause').click(function(){
		clearInterval(playing);
	});
	$('#tempovalue').html(curTempo);
	$('#temposlider').slider({
		'value': curTempo,
		'min': 30,
		'max': 180,
		'step': 10,
		'slide': function(e, ui) {
			curTempo = ui.value;
			$('#tempovalue').html(curTempo);
			if (playing !== false) {
				clearInterval(playing);
				playing = setInterval(playBeat, 60000 / curTempo / 4);
			}
		},
		'stop': function(e, ui) {
		}
	});
});
