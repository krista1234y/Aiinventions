window.onload=function donenow(){
	document.querySelector('#categories_hbutton').addEventListener('click', () => {
		document.querySelector('.menu').classList.toggle('open');
		document.querySelector('.menu_close').classList.toggle('show');
	});
	document.querySelector('.menu_close').addEventListener('click', () =>{
		document.querySelector('.menu').classList.toggle('open');
		document.querySelector('.menu_close').classList.toggle('show');
	});
}