const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
 // First Like Button   
 var btnvar1 = document.getElementById('btnh1');
 var btnvar2 = document.getElementById('btnh2');
 var btnvar3 = document.getElementById('btnh3');
 var btnvar4 = document.getElementById('btnh4');
 var btnvar5 = document.getElementById('btnh5');
 var btn1 = document.getElementById('btn1');
 var btn2 = document.getElementById('btn2');
 var btn3 = document.getElementById('btn3');
 var btn4 = document.getElementById('btn4');
 var btn5 = document.getElementById('btn5');
 var btns1 = document.getElementById('btns1');
 var btns2 = document.getElementById('btns2');
 var btns3 = document.getElementById('btns3');
 var btns4 = document.getElementById('btns4');
 var btns5 = document.getElementById('btns5');
 var bth1 = document.getElementById('bth1');
 var bth2 = document.getElementById('bth2');
 var bth3 = document.getElementById('bth3');
 var bth4 = document.getElementById('bth4');
 var bth5 = document.getElementById('bth5');
 var bt1 = document.getElementById('bt1');
 var bt2 = document.getElementById('bt2');
 var bt3 = document.getElementById('bt3');
 var bt4 = document.getElementById('bt4');
 var bt5 = document.getElementById('bt5');
 var bs1 = document.getElementById('bs1');
 var bs2 = document.getElementById('bs2');
 var bs3 = document.getElementById('bs3');
 var bs4 = document.getElementById('bs4');
 var bs5 = document.getElementById('bs5');
 


function Toggle1(){
      if (btnvar1.style.color =="blue") {
         btnvar1.style.color = "grey"
        
         console.log('unreacted');
      }
      else{
          btnvar1.style.color = "blue"
          
          console.log('reacted');
      }
	 
}

function Toggle2(){
      if (btnvar2.style.color =="red") {
         btnvar2.style.color = "grey"
         console.log('unreacted')
      }
      else{
          btnvar2.style.color = "red"
          console.log('reacted');
          
      }
}
function Toggle3(){
      if (btnvar3.style.color =="yellow") {
         btnvar3.style.color = "grey"
         console.log('unreacted')
      }
      else{
          btnvar3.style.color = "yellow"
          
          console.log('reacted');
      }
}
function Toggle4(){
      if (btnvar4.style.color =="yellow") {
         btnvar4.style.color = "grey"
         console.log('unreacted');
      }
      else{
          btnvar4.style.color = "yellow"
          console.log('reacted');
          
      }
}
function Toggle5(){
      if (btnvar5.style.color =="red") {
         btnvar5.style.color = "grey"
         console.log('unreacted');

      }
      else{
          btnvar5.style.color = "red"
          console.log('reacted');
          
      }
}


function tg1(){
	if (btn1.style.color =="blue") {
		btn1.style.color = "grey"
	   
		console.log('unreacted');
	 }
	 else{
		 btn1.style.color = "blue"
		 
		 console.log('reacted');
	 }
}
function tg2(){
	if (btn2.style.color =="red") {
		btn2.style.color = "grey"
		console.log('unreacted')
	 }
	 else{
		 btn2.style.color = "red"
		 console.log('reacted');
		 
	 }
}
function tg3(){
	if (btn3.style.color =="yellow") {
		btn3.style.color = "grey"
		console.log('unreacted')
	 }
	 else{
		 btn3.style.color = "yellow"
		 
		 console.log('reacted');
	 }
}
function tg4(){
	if (btn4.style.color =="yellow") {
		btn4.style.color = "grey"
		console.log('unreacted');
	 }
	 else{
		 btn4.style.color = "yellow"
		 console.log('reacted');
		 
	 }
}
function tg5(){
	if (btn5.style.color =="red") {
		btn5.style.color = "grey"
		console.log('unreacted');

	 }
	 else{
		 btn5.style.color = "red"
		 console.log('reacted');
		 
	 }
}
function tgl1(){
	if (btns1.style.color =="blue") {
		btns1.style.color = "grey"
		console.log('unreacted');

	 }
	 else{
		 btns1.style.color = "blue"
		 console.log('reacted');
		 
	 }
}
function tgl2(){
	if (btns2.style.color =="red") {
		btns2.style.color = "grey"
		console.log('unreacted');

	 }
	 else{
		 btns2.style.color = "red"
		 console.log('reacted');
		 
	 }
}
function tgl3(){
	if (btns3.style.color =="yellow") {
		btns3.style.color = "grey"
		console.log('unreacted');

	 }
	 else{
		 btns3.style.color = "yellow"
		 console.log('reacted');
		 
	 }
}
function tgl4(){
	if (btns4.style.color =="yellow") {
		btns4.style.color = "grey"
		console.log('unreacted');

	 }
	 else{
		 btns4.style.color = "yellow"
		 console.log('reacted');
		 
	 }
}
function tgl5(){
	if (btns5.style.color =="red") {
		btns5.style.color = "grey"
		console.log('unreacted');

	 }
	 else{
		 btns5.style.color = "red"
		 console.log('reacted');
		 
	 }
}
function tol1(){
	if (bth1.style.color =="blue") {
		bth1.style.color = "grey"
		console.log('unreacted');

	 }
	 else{
		 bth1.style.color = "blue"
		 console.log('reacted');
		 
	 }
}
function tol2(){
	if (bth2.style.color =="red") {
		bth2.style.color = "grey"
		console.log('unreacted');

	 }
	 else{
		 bth2.style.color = "red"
		 console.log('reacted');
		 
	 }
}
function tol3(){
	if (bth3.style.color =="yellow") {
		bth3.style.color = "grey"
		console.log('unreacted');

	 }
	 else{
		 bth3.style.color = "yellow"
		 console.log('reacted');
		 
	 }
}
function tol4(){
	if (bth4.style.color =="yellow") {
		bth4.style.color = "grey"
		console.log('unreacted');

	 }
	 else{
		 bth4.style.color = "yellow"
		 console.log('reacted');
		 
	 }
}
function tol5(){
	if (bth5.style.color =="red") {
		bth5.style.color = "grey"
		console.log('unreacted');

	 }
	 else{
		 bth5.style.color = "red"
		 console.log('reacted');
		 
	 }
}
function tl1(){
	if (bt1.style.color =="blue") {
		bt1.style.color = "grey"
		console.log('unreacted');

	 }
	 else{
		 bt1.style.color = "blue"
		 console.log('reacted');
		 
	 }
}
function tl2(){
	if (bt2.style.color =="red") {
		bt2.style.color = "grey"
		console.log('unreacted');

	 }
	 else{
		 bt2.style.color = "red"
		 console.log('reacted');
		 
	 }
}
function tl3(){
	if (bt3.style.color =="yellow") {
		bt3.style.color = "grey"
		console.log('unreacted');

	 }
	 else{
		 bt3.style.color = "yellow"
		 console.log('reacted');
		 
	 }
}
function tl4(){
	if (bt4.style.color =="yellow") {
		bt4.style.color = "grey"
		console.log('unreacted');

	 }
	 else{
		 bt4.style.color = "yellow"
		 console.log('reacted');
		 
	 }
}
function tl5(){
	if (bt5.style.color =="red") {
		bt5.style.color = "grey"
		console.log('unreacted');

	 }
	 else{
		 bt5.style.color = "red"
		 console.log('reacted');
		 
	 }
}
function tle1(){
	if (bs1.style.color =="blue") {
		bs1.style.color = "grey"
		console.log('unreacted');

	 }
	 else{
		 bs1.style.color = "blue"
		 console.log('reacted');
		 
	 }
}
function tle2(){
	if (bs2.style.color =="red") {
		bs2.style.color = "grey"
		console.log('unreacted');

	 }
	 else{
		 bs2.style.color = "red"
		 console.log('reacted');
		 
	 }
}
function tle3(){
	if (bs3.style.color =="yellow") {
		bs3.style.color = "grey"
		console.log('unreacted');

	 }
	 else{
		 bs3.style.color = "yellow"
		 console.log('reacted');
		 
	 }
}
function tle4(){
	if (bs4.style.color =="yellow") {
		bs4.style.color = "grey"
		console.log('unreacted');

	 }
	 else{
		 bs4.style.color = "yellow"
		 console.log('reacted');
		 
	 }
}
function tle5(){
	if (bs5.style.color =="red") {
		bs5.style.color = "grey"
		console.log('unreacted');

	 }
	 else{
		 bs5.style.color = "red"
		 console.log('reacted');
		 
	 }
}