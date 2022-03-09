let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let select = document.querySelector('select');
let price = document.querySelector('.price');
let item = document.querySelectorAll('.item');
document.addEventListener('click',()=>{
	let ok = document.querySelector('input:checked');
	if (ok.id === 'one') price.innerHTML = "$" + one.value * select.value, item[0].classList.add('test'), item[1].classList.remove('test'),item[2].classList.remove('test') ;
	if (ok.id === 'two') price.innerHTML = "$" + two.value * select.value, item[1].classList.add('test'), item[0].classList.remove('test'),item[2].classList.remove('test');
	if(ok.id === 'three') price.innerHTML = "$" + three.value * select.value, item[2].classList.add('test'), item[0].classList.remove('test'),item[1].classList.remove('test');
	document.querySelector('.selected').innerHTML = "#" +ok.id;
});	