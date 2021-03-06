var link = document.querySelector('.login'); 
var popup = document.querySelector('.modal-content');
var close = document.querySelector('.modal-content-close');
var login = popup.querySelector('[name=login]');
var form = popup.querySelector('form');
var password = popup.querySelector('[name=password]');
var storage = localStorage.getItem('login');

link.addEventListener('click', function(event) {
	event.preventDefault();
	console.log('окно появилось');
	popup.classList.add('modal-content-show');
	login.focus(); 
	if (storage) {
		login.value = storage; 
		password.focus();
	} else { 
		login.focus(); 
	}
});

close.addEventListener('click', function(event) {
	event.preventDefault();
	console.log('окно исчезло');
	popup.classList.remove('modal-content-show');
});

form.addEventListener('submit', function(event) {
	if (!(login.value && password.value)) {
		event.preventDefault(); 
		console.log('Нужно ввести логин и пароль.');
		popup.classList.add('modal-error');
	} else {
		localStorage.setItem('login', login.value) 
	}
});

window.addEventListener('keydown', function(event) {  
	if (event.keyCode == 27) { 
		if (popup.classList.contains('modal-content-show')) { 
			popup.classList.remove('modal-content-show'); 
		}
	}
});
