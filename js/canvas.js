var canvasElem, ctx, prevX=0, prevY=0, currX=0, currY=0, tiddu_flag = false;
var colorX = "#990099", widthY = 8;
var lang = 'kn';
var vowels = ['ಅ','ಆ','ಇ','ಈ','ಉ','ಊ','ಋ','ಎ','ಏ','ಐ','ಒ','ಓ','ಔ','ಅಂ','ಅಃ'];
var consonants = ['ಕ','ಖ','ಗ','ಘ','ಙ','ಚ','ಛ','ಜ','ಝ','ಞ','ಟ','ಠ','ಡ','ಢ','ಣ','ತ','ಥ','ದ','ಧ','ನ','ಪ','ಫ','ಬ','ಭ','ಮ','ಯ','ರ','ಲ','ವ','ಶ','ಷ','ಸ','ಹ','ಳ'];
var kaagunita = ['ಕ','ಕಾ','ಕಿ','ಕೀ','ಕು','ಕೂ','ಕೃ','ಕೆ','ಕೇ','ಕೈ','ಕೊ','ಕೋ','ಕೌ','ಕಂ','ಕಃ','ಖ','ಖಾ','ಖಿ','ಖೀ','ಖು','ಖೂ','ಖೃ','ಖೆ','ಖೇ','ಖೈ','ಖೊ','ಖೋ','ಖೌ','ಖಂ','ಖಃ','ಗ','ಗಾ','ಗಿ','ಗೀ','ಗು','ಗೂ','ಗೃ','ಗೆ','ಗೇ','ಗೈ','ಗೊ','ಗೋ','ಗೌ','ಗಂ','ಗಃ','ಘ','ಘಾ','ಘಿ','ಘೀ','ಘು','ಘೂ','ಘೃ','ಘೆ','ಘೇ','ಘೈ','ಘೊ','ಘೋ','ಘೌ','ಘಂ','ಘಃ','ಙ','ಙಾ','ಙಿ','ಙೀ','ಙು','ಙೂ','ಙೃ','ಙೆ','ಙೇ','ಙೈ','ಙೊ','ಙೋ','ಙೌ','ಙಂ','ಙಃ','ಚ','ಚಾ','ಚಿ','ಚೀ','ಚು','ಚೂ','ಚೃ','ಚೆ','ಚೇ','ಚೈ','ಚೊ','ಚೋ','ಚೌ','ಚಂ','ಚಃ','ಛ','ಛಾ','ಛಿ','ಛೀ','ಛು','ಛೂ','ಛೃ','ಛೆ','ಛೇ','ಛೈ','ಛೊ','ಛೋ','ಛೌ','ಛಂ','ಛಃ','ಜ','ಜಾ','ಜಿ','ಜೀ','ಜು','ಜೂ','ಜೃ','ಜೆ','ಜೇ','ಜೈ','ಜೊ','ಜೋ','ಜೌ','ಜಂ','ಜಃ','ಝ','ಝಾ','ಝಿ','ಝೀ','ಝು','ಝೂ','ಝೃ','ಝೆ','ಝೇ','ಝೈ','ಝೊ','ಝೋ','ಝೌ','ಝಂ','ಝಃ','ಞ','ಞಾ','ಞಿ','ಞೀ','ಞು','ಞೂ','ಞೃ','ಞೆ','ಞೇ','ಞೈ','ಞೊ','ಞೋ','ಞೌ','ಞಂ','ಞಃ','ಟ','ಟಾ','ಟಿ','ಟೀ','ಟು','ಟೂ','ಟೃ','ಟೆ','ಟೇ','ಟೈ','ಟೊ','ಟೋ','ಟೌ','ಟಂ','ಟಃ','ಠ','ಠಾ','ಠಿ','ಠೀ','ಠು','ಠೂ','ಠೃ','ಠೆ','ಠೇ','ಠೈ','ಠೊ','ಠೋ','ಠೌ','ಠಂ','ಠಃ','ಡ','ಡಾ','ಡಿ','ಡೀ','ಡು','ಡೂ','ಡೃ','ಡೆ','ಡೇ','ಡೈ','ಡೊ','ಡೋ','ಡೌ','ಡಂ','ಡಃ','ಢ','ಢಾ','ಢಿ','ಢೀ','ಢು','ಢೂ','ಢೃ','ಢೆ','ಢೇ','ಢೈ','ಢೊ','ಢೋ','ಢೌ','ಢಂ','ಢಃ','ಣ','ಣಾ','ಣಿ','ಣೀ','ಣು','ಣೂ','ಣೃ','ಣೆ','ಣೇ','ಣೈ','ಣೊ','ಣೋ','ಣೌ','ಣಂ','ಣಃ','ತ','ತಾ','ತಿ','ತೀ','ತು','ತೂ','ತೃ','ತೆ','ತೇ','ತೈ','ತೊ','ತೋ','ತೌ','ತಂ','ತಃ','ಥ','ಥಾ','ಥಿ','ಥೀ','ಥು','ಥೂ','ಥೃ','ಥೆ','ಥೇ','ಥೈ','ಥೊ','ಥೋ','ಥೌ','ಥಂ','ಥಃ','ದ','ದಾ','ದಿ','ದೀ','ದು','ದೂ','ದೃ','ದೆ','ದೇ','ದೈ','ದೊ','ದೋ','ದೌ','ದಂ','ದಃ','ಧ','ಧಾ','ಧಿ','ಧೀ','ಧು','ಧೂ','ಧೃ','ಧೆ','ಧೇ','ಧೈ','ಧೊ','ಧೋ','ಧೌ','ಧಂ','ಧಃ','ನ','ನಾ','ನಿ','ನೀ','ನು','ನೂ','ನೃ','ನೆ','ನೇ','ನೈ','ನೊ','ನೋ','ನೌ','ನಂ','ನಃ','ಪ','ಪಾ','ಪಿ','ಪೀ','ಪು','ಪೂ','ಪೃ','ಪೆ','ಪೇ','ಪೈ','ಪೊ','ಪೋ','ಪೌ','ಪಂ','ಪಃ','ಫ','ಫಾ','ಫಿ','ಫೀ','ಫು','ಫೂ','ಫೃ','ಫೆ','ಫೇ','ಫೈ','ಫೊ','ಫೋ','ಫೌ','ಫಂ','ಫಃ','ಬ','ಬಾ','ಬಿ','ಬೀ','ಬು','ಬೂ','ಬೃ','ಬೆ','ಬೇ','ಬೈ','ಬೊ','ಬೋ','ಬೌ','ಬಂ','ಬಃ','ಭ','ಭಾ','ಭಿ','ಭೀ','ಭು','ಭೂ','ಭೃ','ಭೆ','ಭೇ','ಭೈ','ಭೊ','ಭೋ','ಭೌ','ಭಂ','ಭಃ','ಮ','ಮಾ','ಮಿ','ಮೀ','ಮು','ಮೂ','ಮೃ','ಮೆ','ಮೇ','ಮೈ','ಮೊ','ಮೋ','ಮೌ','ಮಂ','ಮಃ','ಯ','ಯಾ','ಯಿ','ಯೀ','ಯು','ಯೂ','ಯೃ','ಯೆ','ಯೇ','ಯೈ','ಯೊ','ಯೋ','ಯೌ','ಯಂ','ಯಃ','ರ','ರಾ','ರಿ','ರೀ','ರು','ರೂ','ರೃ','ರೆ','ರೇ','ರೈ','ರೊ','ರೋ','ರೌ','ರಂ','ರಃ','ಲ','ಲಾ','ಲಿ','ಲೀ','ಲು','ಲೂ','ಲೃ','ಲೆ','ಲೇ','ಲೈ','ಲೊ','ಲೋ','ಲೌ','ಲಂ','ಲಃ','ವ','ವಾ','ವಿ','ವೀ','ವು','ವೂ','ವೃ','ವೆ','ವೇ','ವೈ','ವೊ','ವೋ','ವೌ','ವಂ','ವಃ','ಶ','ಶಾ','ಶಿ','ಶೀ','ಶು','ಶೂ','ಶೃ','ಶೆ','ಶೇ','ಶೈ','ಶೊ','ಶೋ','ಶೌ','ಶಂ','ಶಃ','ಷ','ಷಾ','ಷಿ','ಷೀ','ಷು','ಷೂ','ಷೃ','ಷೆ','ಷೇ','ಷೈ','ಷೊ','ಷೋ','ಷೌ','ಷಂ','ಷಃ','ಸ','ಸಾ','ಸಿ','ಸೀ','ಸು','ಸೂ','ಸೃ','ಸೆ','ಸೇ','ಸೈ','ಸೊ','ಸೋ','ಸೌ','ಸಂ','ಸಃ','ಹ','ಹಾ','ಹಿ','ಹೀ','ಹು','ಹೂ','ಹೃ','ಹೆ','ಹೇ','ಹೈ','ಹೊ','ಹೋ','ಹೌ','ಹಂ','ಹಃ','ಳ','ಳಾ','ಳಿ','ಳೀ','ಳು','ಳೂ','ಳೃ','ಳೆ','ಳೇ','ಳೈ','ಳೊ','ಳೋ','ಳೌ','ಳಂ','ಳಃ'];
var i=0;
function show_json() {
  //console.log( JSON.stringify(vowels + consonants));
}

function varna_matadu(varna_mathu) {
	//var audio = new Audio();
	//audio.src ='https://translate.google.com/translate_tts?ie=utf-8&tl=en&q=' + varna_mathu;
	//audio.play();
	if ('speechSynthesis' in window) {
	  var synthesis = window.speechSynthesis;
		console.log('Text-to-speech supported.');
	} else {
	  console.log('Text-to-speech not supported.');
	  var option = document.createElement('option');
	  option.textContent =  "Text-to-speech not supported.";
	  voiceSelect.appendChild(option);
	}
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[1];
  msg.voiceURI = "native";
  msg.volume = 2;
  msg.rate = 2;
  msg.pitch = 0.8;
  msg.text = varna_mathu;
  msg.lang = 'kn-IN';
  speechSynthesis.speak(msg);
  //console.log(varna_mathu);
}

function init() {
	//show_json()
	canvasElem = document.getElementById('mycanvas');
	ctx = canvasElem.getContext('2d');
	canvasElem.width = window.innerWidth / 2;
  if (canvasElem.width < 400) {
    canvasElem.width = window.innerWidth * 0.95;
  }
	canvasElem.height = window.innerHeight * 0.75;
	chg_varna();
	canvasElem.addEventListener('mousemove', function(evt){
		findxy('move', evt);
	}, false);
	canvasElem.addEventListener('mousedown', function(evt){
		findxy('down', evt);
	}, false);
	canvasElem.addEventListener('mouseup', function(evt){
		findxy('up', evt);
	}, false);
	canvasElem.addEventListener('mouseout', function(evt){
		findxy('out', evt);
	}, false);

  canvasElem.addEventListener("touchstart", function (e) {
    e.preventDefault();
    mousePos = getTouchPos(canvasElem, e);
  var touch = e.touches[0];
  var mouseEvent = new MouseEvent("mousedown", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  console.log("From Touch" + mouseEvent.clientX +" " + mouseEvent.clientY);
  canvasElem.dispatchEvent(mouseEvent);
}, false);
canvasElem.addEventListener("touchend", function (e) {
  e.preventDefault();

  var mouseEvent = new MouseEvent("mouseup", {});
  canvasElem.dispatchEvent(mouseEvent);
}, false);
canvasElem.addEventListener("touchmove", function (e) {
  e.preventDefault();
  var touch = e.touches[0];

  var mouseEvent = new MouseEvent("mousemove", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  console.log("From Touch" + mouseEvent.clientX +" " + mouseEvent.clientY);
  canvasElem.dispatchEvent(mouseEvent);
}, false);

}

function getTouchPos(canvasElem, touchEvent) {
  var rect = canvasElem.getBoundingClientRect();
  return {
    x: touchEvent.touches[0].clientX - rect.left,
    y: touchEvent.touches[0].clientY - rect.top
  };
}

function chg_varna() {
	select_varnatype = document.getElementById("varnamaletype");
	varna_type = select_varnatype.value;
	i=0;
	switch(varna_type) {
		case 'vowels':
			print_arr_leters = vowels;
			break;

		case 'consonents':
			print_arr_leters = consonants;
			break;

		case 'kaagunita':
			print_arr_leters = kaagunita;
			break;
		default:
	}
	writemsg(canvasElem);
}

function varna_tiddu(currX, currY) {
	ctx.beginPath();
	ctx.moveTo(prevX, prevY);
	ctx.lineTo(currX, currY);
	ctx.strokeStyle = colorX;
	ctx.lineWidth = widthY;
	ctx.stroke();
	ctx.closePath();
}

function writemsg(canvasElem, msg) {
	ctx.save();
	ctx.clearRect(0,0,canvasElem.width, canvasElem.height);
	ctx.fillStyle = 'black';
	ctx.strokeStyle='orange';
	ctx.lineWidth=4;
	ctx.font='225px Tunga';
	ctx.fillText(print_arr_leters [i], canvasElem.width * 0.15,canvasElem.height * 0.9);
	ctx.strokeText(print_arr_leters [i],canvasElem.width * 0.15,canvasElem.height * 0.9);
	ctx.restore();
	varna_matadu(print_arr_leters [i]);
}

function getMousePos(canvasElem, evt) {
	var rect = canvasElem.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top,
	};
}

function findxy(res, evt) {
		var rect = canvasElem.getBoundingClientRect();
        if (res == 'down') {
            currX = evt.clientX - canvasElem.offsetLeft;
            currY = evt.clientY - canvasElem.offsetTop;
			prevX = currX;
            prevY = currY;
			console.log(canvasElem.offsetLeft +" "+currX +" " +rect.left +" " +evt.clientX);
			console.log(canvasElem.offsetTop +" " +currY+" "+rect.top+" "+evt.clientY);
            tiddu_flag = true;
            dot_flag = true;
            if (dot_flag) {
                ctx.beginPath();
                ctx.fillStyle = colorX;
                ctx.fillRect(currX, currY, 2, 2);
                ctx.closePath();
                dot_flag = false;
				ctx.lineJoin = ctx.lineCap = 'round';
				ctx.shadowBlur = 5;
				ctx.shadowColor = colorX;
            }
        }
        if (res == 'up' || res == "out") {
            tiddu_flag = false;
        }
        if (res == 'move') {
            if (tiddu_flag) {
                prevX = currX;
                prevY = currY;
                currX = evt.clientX - canvasElem.offsetLeft;
                currY = evt.clientY - canvasElem.offsetTop;
                varna_tiddu(currX, currY);
            }
        }
    }

function canvasclear(canvasElem){
	//var check_clear = confirm("Clear the Canvas?");
	//if (check_clear) {
	ctx.save();
	ctx.clearRect(0,0,canvasElem.width, canvasElem.height);
	//}
}

function chg_letters(num) {
	if (num == 1) {
		i++;
		if(i>print_arr_leters.length-1) {
			i = 0;
		}
	} else {
		i--;
		if (i <0) {
			i = print_arr_leters.length - 1;
		}
	}
	//var msg = print_arr_leters [i];
	writemsg(canvasElem);
}

function color_chooser(setcolor_obg){
	colorX = setcolor_obg.value;
	//console.log(setcolor_obg.value);
}
