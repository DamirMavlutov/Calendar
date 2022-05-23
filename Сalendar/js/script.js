let ddd = document.querySelector('h1');
alert(ddd);
function change() {
	document.getElementById("nameCal").innerHTML = "Новый текст!";
}
let days = document.querySelector('.days');
days.innerHTML = '';
for (let i = 1; i < 30; i++){
	var newLi = document.createElement('li');
	days.appendChild(newLi);  //через команду appendChild в элемент days добавляем новый li элемент

	var date = new Date().getDate();   // находим текущую дату
	if (date !== i) {
		newLi.innerHTML = i;
		
	}
	else {
		newLi.innerHTML = '';
		let activeDay = document.createElement('span');  // создаем спан
		activeDay.className ='active';  // присваеваем класс спану
		activeDay.style.backgroundColor = 'red'; 
		activeDay.innerHTML = i;
		newLi.appendChild(activeDay); // добавляем span в li
	}
}

