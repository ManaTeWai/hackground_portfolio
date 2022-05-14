document.addEventListener('DOMContentLoaded', function(){
	console.log('Готов!');
});

var data = JSON.parse('{"steps": [{"target": "#element-1","title": "Шаг 1","type": "popup","content": "Этот тур запускается, когда происходит клик по html-элементу с идентификатором element-1. За это отвечает параметр target. Открывается в виде попапа по центру экрана, потому что у него параметр type равен popup.","primary_btn": "Далее"       },       {"target": "#element-2","title": "Шаг 2","type": "hint","content": "Этот шаг тура открывается в виде подсказки рядом с html-элементом с идентификатором element-2 после нажатия на кнопку Далее на предыдущем шаге.","primary_btn": "Далее"       },       {"target": "#element-3","title": "Шаг 3","type": "hint","content": "Этот шаг тура открывается в виде подсказки рядом с html-элементом с идентификатором element-3 после нажатия на кнопку Далее на предыдущем шаге."}]}');

var steps = data.steps;

steps.forEach(function(step) {
	if (step.type == 'popup') {
		showPopup(step);	
	}

	if (step.type == 'hint') {
		showHint(step);	
	} 
});


function showPopup(params) {
	let popup = document.getElementById('popup'),
		popupToggle = document.getElementById('button'),
		popupClose = document.querySelector('.close'),
		next3 = document.getElementById('next3'),
		popup3 = document.getElementById('second_popup'),
		popupToggle3 = document.getElementById('sp'),
		popupClose3 = document.querySelector('.close3'),
		next2 = document.getElementById('next2'),
		popup2 = document.getElementById('mini_popup'),
		popupToggle2 = document.getElementById('pp'),
		popupClose2 = document.querySelector('.close2'),
		next1 = document.getElementById('next1');

		window.onclick = function(e) {
			if(e.target == popup) {
				popup.style.display="none";
			}
			if(e.target == popup3) {
				popup3.style.display="none";
			}
			if(e.target == popup2) {
				popup2.style.display="none";
			}
		};

		popupToggle.onclick = function() {
			popup.style.display="block";
		};

		popupClose.onclick = function() {
			popup.style.display="none";
		};

		next3.onclick = function() {
			popup2.style.display="block"
			popup.style.display="none"
		};

		popupToggle2.onclick = function() {
			popup2.style.display="block";
		};

		popupClose2.onclick = function() {
			popup2.style.display="none";
		};

		next2.onclick = function() {
			popup3.style.display="block"
			popup2.style.display="none"
		};

		popupToggle3.onclick = function() {
			popup3.style.display="block";
		};

		popupClose3.onclick = function() {
			popup3.style.display="none";
		};

		next1.onclick = function() {
			popup.style.display="block"
			popup3.style.display="none"
		};
		// в ней доступны переменные params.title, params.content
}

function showHint(params) {
	// В этой функции создается и показывается подсказка
	// в ней доступны переменные params.title, params.content
}
