/////////////////// 1 ///////////////////////
//1
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// let pl = document.querySelector('#p1');
// let per = document.querySelector('#p2');
// btn.addEventListener('click', function () {
//     let     num =  +elem.value;
//     pl.textContent += num ** 2;
//     per.textContent += 4 * num;
// })

//2
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let btn = document.querySelector('#btn');
// let pl = document.querySelector('#p1');
// let per = document.querySelector('#p2');
// btn.addEventListener('click', function () {
//     pl.textContent += +elem1.value * +elem2.value;
//     per.textContent += (+elem1.value * +elem2.value) * 2;
// })

//3
// let elem1 = document.querySelector('#elem1');
// let btn = document.querySelector('#btn');
// let l = document.querySelector('#p1');
// let pl = document.querySelector('#p2');
// btn.addEventListener('click', function () {
//     l.textContent += +elem1.value * 2 * 3.14;
//     pl.textContent += 3.14 * (+elem1.value) ** 2;
// })

//4
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let btn = document.querySelector('#btn');
// let pl = document.querySelector('#p1');
// btn.addEventListener('click', function () {
//     let a = Number(elem1.value);
//     let b = Number(elem2.value);
//     let c = Number(elem3.value);
//     if (a + b > c && a + c > b && b + c > a) {
//         let p = (a+b+c)/2;
//         let square = Math.sqrt(p*((p-a)*(p-b)*(p-c)));
//         if (!isNaN(square)) {
//             pl.textContent += square;
//         } 
//     } else {
//         pl.textContent = "Треугольника с такими сторонами не существует";
//     }
// })

/////////////////// 2 ///////////////////////

//1
// let elem1 = document.querySelector('#el1');
// let elem2 = document.querySelector('#el2');
// let elem3 = document.querySelector('#el3');
// let btn = document.querySelector('#btn');
// let p = document.querySelector('#p1');
// btn.addEventListener('click', function(){
//     let a = Number(elem1.value);
//     let b = Number(elem2.value);
//     let c = Number(elem3.value);
//     let d = b**2 - 4*a*c;
//     let x1 = (-b - Math.sqrt(d))/ 2*a;
//     let x2 = (-b + Math.sqrt(d))/ 2*a;
//     if(d>0){
//         p.textContent = 'x1 = ' + x1 + ' ' + 'x2 = ' + x2;
//     } else if (d==0){
//         x1 = x2;
//         p.textContent = 'x = ' + x1;
//     } else {
//         p.textContent = 'корней нет';
//     }
    
// })

//2 
// let a = document.querySelector('#el1');
// let b = document.querySelector('#el2');
// let c = document.querySelector('#el3');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
//     let arr = [+a.value, +b.value, +c.value]; 
//     let max = Math.max(...arr);
//     let index = arr.indexOf(max);
//     arr.splice(index, 1);
//     if (max ** 2 == arr[0] ** 2 + arr[1] ** 2){
//         return ('числа являются тройкой Пифагора');
//     } else {
//         return ('числа не являются тройкой Пифагора');
//     }
// })

//3
// let el1 = document.querySelector('#el1');
// let el2 = document.querySelector('#el2');

// let btn = document.querySelector('#btn');
// let ul = document.querySelector('#ul');
// btn.addEventListener('click', function(){
//     let elem1 = +el1.value;  
//     let elem2 = +el2.value;  
//     let min = Math.min(elem1, elem2); 
//     for (let i = 1; i <= min; i++) {
//         if (elem1 % i === 0 && elem2 % i === 0) {
//             let li = document.createElement('li');
//             li.textContent = i;
//             ul.appendChild(li);
//         }
//     }
// })

//5
// let el1 = document.querySelector('#el1');
// let el2 = document.querySelector('#el2');
// let btn = document.querySelector('#btn');
// let div = document.querySelector('#div');
// btn.addEventListener('click', function(){
//     let elem1 = +el1.value;  
//     let elem2 = +el2.value;  
//     let min = Math.min(elem1, elem2); 
//     let arr = [];

//     for (let i = 1; i <= min; i++) {
//         if (elem1 % i === 0 && elem2 % i === 0) {
//             arr.push(i);
//         }
//     } 
//     let max = Math.max(...arr);
//     let index = arr.indexOf(max);
//     let p = document.createElement('p');
//     p.textContent = 'Наибольший общий делитель: ' + arr[index];
//     div.appendChild(p);
// })

//6
// let el1 = document.querySelector('#el1');
// let el2 = document.querySelector('#el2');
// let btn = document.querySelector('#btn');
// let div = document.querySelector('#div');
// btn.addEventListener('click', function(){
//     let elem1 = +el1.value;  
//     let elem2 = +el2.value;  
//     let min = Math.min(elem1, elem2); 
//     let arr = [];
//     for (let i = 1; i <= min; i++) {
//         if (elem1 % i === 0 && elem2 % i === 0) {
//             arr.push(i);
//         }
//     } 
//     let max = Math.max(...arr);
//     let index = arr.indexOf(max);
//     let lcm = (elem1 * elem2) / arr[index]; 
//     let p = document.createElement('p');
//     p.textContent = 'наименьшее число, которое делится и на одно, и на второе из введенных чисел: ' + lcm;
//     div.appendChild(p);
// })

/////////////////// 3 ///////////////////////
// let btn = document.querySelector('#btn');
// let random = Math.floor(Math.random() * 100) + 1;

// let elem1 = document.querySelector('#elem');

// let p = document.querySelector('#p1');
// btn.addEventListener('click', function(){
//     let elem = +elem1.value;

//     if (random > elem){
//         p.textContent = 'введите число побольше';
//     } else if (random < elem){
//         p.textContent = 'введите число поменьше';
//     } else {
//         p.textContent = 'вы угадали';
//     }
// })

/////////////////// 4 ///////////////////////
// let arr = [];
// let count = 0;
// let div = document.querySelector('#div');
// let table = document.querySelector('#table');
// for (let i = 0; i < 10; i++) {
// 	let tr = document.createElement('tr');
// 	for (let j = 0; j < 10; j++) {
// 		let td = document.createElement('td');
//         td.classList.add('table');
// 		tr.appendChild(td);
//         td.addEventListener('click', function(){
//             if(arr.includes(`${i}-${j}`)){
//                 td.style.backgroundColor = 'green';
//                 count++;
//                 if (count === 10) {
//                    alert('Вы нашли все ячейки');
//                 }
//             } else {
//                 td.style.backgroundColor = 'red';
//             }
//         })
// 	}
// 	table.appendChild(tr);
// }
// for (let i = 0; i < 10; i++) {
//     let row = Math.floor(Math.random() * 10);
//     let col = Math.floor(Math.random() * 10);
//     arr.push(`${row}-${col}`);
// }

/////////////////// 5 ///////////////////////

// let arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
//     'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 
//     'ф', 'ы', 'в', 'а', 'п', 'р', 'о','л', 'д', 'ж', 'э', 'я', 
//     'ч', 'с', 'м', 'и', 'т', 'ь', 'б','ю', ' ', 'Caps Lock'];
// let capsLock = false;
// let elem = document.querySelector('#elem');
// let keyb = document.querySelector('#keyboard');
// arr.forEach(function (key) {
//     let btn = document.createElement('button');
//     btn.textContent = key;
//     btn.addEventListener('click', function () {
//         if (key === 'Caps Lock') {
//             capsLock = !capsLock;
//             return;
//         }
//         if (capsLock) {
//             elem.value += key.toUpperCase();
//         } else {
//             elem.value += key;
//         }
//     });
//     keyb.appendChild(btn);
// });

/////////////////// 6 ///////////////////////
// let h = document.querySelector('#date');
// let now = new Date();
// let ul = document.querySelector('#ul');
// let days = now.getDate();
// let month = new Date().getMonth() + 1;
// let year = now.getFullYear();
// let months = ["Январь", "Февраль", "Март", "Апрель", 'Май', "Июнь", "Июль", "Август", 'Сентябрь', "Октябрь", "Ноябрь", "Декабрь"]
// h.textContent = months[month - 1] + ' ' + year;
// for(let i = 1; i <= new Date(year, month, 0).getDate(); i++){
//     let li = document.createElement('li');
//     li.textContent = i;
//     if (i == days) {
//         li.classList.add('day');
//     }
//     ul.appendChild(li);
// }

// let v = document.querySelector('#vpered');
// let n = document.querySelector('#nazad');
// v.addEventListener('click', function(event) {
// 	event.preventDefault(); 
//     month += 1;
//     if (month === 13) {
//         year += 1;
//         month = 1;
//     }
//     h.textContent = months[month - 1] + ' ' + year;
//     spisok();
// });

// n.addEventListener('click', function(event) {
// 	event.preventDefault(); 
//     month -= 1;
//     if (month === 0) {
//         year -= 1;
//         month = 12;
//     }
//     h.textContent = months[month - 1] + ' ' + year;
//     spisok();
// });

// function spisok(){
//     let lis = document.querySelectorAll('li');
//     for (let li of lis) {
//         li.remove();
//     }
//     for(let i = 1; i <= new Date(year, month, 0).getDate(); i++){
//         let li = document.createElement('li');
//         li.textContent = i;
//         if (i == days) {
//             li.classList.add('day');
//         }
//         ul.appendChild(li);
//     } 
// }

/////////////////// 7 ///////////////////////
// let elem = document.querySelector('#elem');
// let p = document.querySelector('#pp');
// let obj = {
//     'body': 'Тело документа',
//     'p': 'Абзац текста',
//     'title': 'Заголовок документа',
//     'h1': 'Заголовок первого уровня'
// };

// elem.addEventListener('keydown', function(event){
//     if (event.key == 'Enter'){
//         let tagName = elem.value.toLowerCase();
//         p.textContent = obj[tagName];
//     } 
// })

/////////////////// 8 ///////////////////////
// let elem = document.querySelector('#input');
// let table = document.getElementById('table');

// let obj = [
//     {date: '2000',  title: "событие 1", description: "описание 1" },
//     {date: '2001',  title: "событие 2", description: "описание 2" },
//     {date: '2002',  title: "событие 3", description: "описание 3" },
// ];

// elem.addEventListener('keydown', function(event){
//     if (event.key == 'Enter'){
//         let year = +input.value;
//         let fil = obj.filter(function(event){
//             return new Date(event.date).getFullYear() === year;
//         });
//         tab(fil);
//     } 
// })

// function tab (events){
//     table.innerHTML = '<tr><th>Дата</th><th>Название</th><th>Описание</th></tr>';

//     events.forEach(function(event){
//         let row = table.insertRow();
//         let date = row.insertCell(0);
//         let title = row.insertCell(1);
//         let description = row.insertCell(2);
    
//         date.textContent = event.date;
//         title.textContent = event.title;
//         description.textContent = event.description;
//     })
    
// };

/////////////////// 9 ///////////////////////
// let elem = document.querySelector('#date');
// let obj = {
//     овен: {
//         today: "Пусть яркие краски расцветят сегодняшний день.",
//         tomorrow: "Энергии, вами сегодня излучаемой, хватит, чтобы заменить пару электростанций. ",
//         dayAfterTomorrow: "Не дайте легкому изящному беспорядку перерасти в полнейший хаос."
//     },
//     телец: {
//         today: "Пусть яркие краски расцветят сегодняшний день.",
//         tomorrow: "Энергии, вами сегодня излучаемой, хватит, чтобы заменить пару электростанций. ",
//         dayAfterTomorrow: "Не дайте легкому изящному беспорядку перерасти в полнейший хаос."
//     },
//     близнецы: {
//         today: "Пусть яркие краски расцветят сегодняшний день.",
//         tomorrow: "Энергии, вами сегодня излучаемой, хватит, чтобы заменить пару электростанций. ",
//         dayAfterTomorrow: "Не дайте легкому изящному беспорядку перерасти в полнейший хаос."
//     },
//     рак: {
//         today: "Пусть яркие краски расцветят сегодняшний день.",
//         tomorrow: "Энергии, вами сегодня излучаемой, хватит, чтобы заменить пару электростанций. ",
//         dayAfterTomorrow: "Не дайте легкому изящному беспорядку перерасти в полнейший хаос."
//     },
//     лев: {
//         today: "Пусть яркие краски расцветят сегодняшний день.",
//         tomorrow: "Энергии, вами сегодня излучаемой, хватит, чтобы заменить пару электростанций. ",
//         dayAfterTomorrow: "Не дайте легкому изящному беспорядку перерасти в полнейший хаос."
//     },
//     дева: {
//         today: "Пусть яркие краски расцветят сегодняшний день.",
//         tomorrow: "Энергии, вами сегодня излучаемой, хватит, чтобы заменить пару электростанций. ",
//         dayAfterTomorrow: "Не дайте легкому изящному беспорядку перерасти в полнейший хаос."
//     },
//     весы: {
//         today: "Пусть яркие краски расцветят сегодняшний день.",
//         tomorrow: "Энергии, вами сегодня излучаемой, хватит, чтобы заменить пару электростанций. ",
//         dayAfterTomorrow: "Не дайте легкому изящному беспорядку перерасти в полнейший хаос."
//     },
//     скорпион: {
//         today: "Пусть яркие краски расцветят сегодняшний день.",
//         tomorrow: "Энергии, вами сегодня излучаемой, хватит, чтобы заменить пару электростанций. ",
//         dayAfterTomorrow: "Не дайте легкому изящному беспорядку перерасти в полнейший хаос."
//     },
//     стрелец: {
//         today: "Пусть яркие краски расцветят сегодняшний день.",
//         tomorrow: "Энергии, вами сегодня излучаемой, хватит, чтобы заменить пару электростанций. ",
//         dayAfterTomorrow: "Не дайте легкому изящному беспорядку перерасти в полнейший хаос."
//     },
//     козерог: {
//         today: "Пусть яркие краски расцветят сегодняшний день.",
//         tomorrow: "Энергии, вами сегодня излучаемой, хватит, чтобы заменить пару электростанций. ",
//         dayAfterTomorrow: "Не дайте легкому изящному беспорядку перерасти в полнейший хаос."
//     },
//     водолей: {
//         today: "Пусть яркие краски расцветят сегодняшний день.",
//         tomorrow: "Энергии, вами сегодня излучаемой, хватит, чтобы заменить пару электростанций. ",
//         dayAfterTomorrow: "Не дайте легкому изящному беспорядку перерасти в полнейший хаос."
//     },
//     рыбы: {
//         today: "Пусть яркие краски расцветят сегодняшний день.",
//         tomorrow: "Энергии, вами сегодня излучаемой, хватит, чтобы заменить пару электростанций. ",
//         dayAfterTomorrow: "Не дайте легкому изящному беспорядку перерасти в полнейший хаос."
//     }
// }
// let p = document.getElementById('horoscope');
// elem.addEventListener('keydown', function(event){
//     if (event.key === 'Enter'){
//         let check = document.querySelector('input[name="day"]:checked').value;

//         let birthdate = elem.value;
//         let sign = getSign(birthdate);
//         if (sign) {
//             p.textContent = obj[sign][check];
//         } 
//     } 
// })

// function getSign(birthdate) {
//     let date = birthdate;
//     if (date >= '03-21' && date <= '04-19') {
//       return "овен";
//     } 
//     else if (date >= '04-20' && date <= '05-20') {
//       return "телец";
//     } 
//     else if (date >= '05-21' && date <= '06-20') {
//       return "близнецы";
//     } 
//     else if (date >= '06-21' && date <= '07-22') {
//       return "рак";
//     } 
//     else if (date >= '07-23' && date <= '08-22') {
//       return "лев";
//     } 
//     else if (date >= '08-23' && date <= '09-22') {
//       return "дева";
//     } 
//     else if (date >= '09-23' && date <= '10-22') {
//       return "весы";
//     }
//     else if (date >= '10-23' && date <= '11-21') {
//       return "скорпион";
//     } 
//     else if (date >= '11-22' && date <= '12-21') {
//       return "стрелец";
//     } 
//     else if (date >= '12-22' && date <= '01-19') {
//       return "козерог";
//     } 
//     else if (date >= '01-20' && date <= '02-18') {
//       return "водолей";
//     } 
//     else if (date >= '02-19' && date <= '03-20') {
//       return "рыбы";
//     } 
// }

/////////////////// 10 ///////////////////////
// let arr = [
//     {text: 'сегодня вы рискуете быть обманутым', color: 'red'},
//     {text: 'устройте сегодня себе выходной', color: 'green'},
//     {text: 'сегодня вы рискуете забыть бобра дома', color: 'red'},
//     {text: 'пусть весь мир подождет', color: 'green'},
//     {text: 'сегодня вы рискуете забыть что-то дома', color: 'red'},
//     {text: 'сегодня ужасный день', color: 'red'},
//     {text: 'у вас сегодня будет замечательный день', color: 'green'}
// ];

// let timer = document.querySelector('#timer');
// let text  = document.querySelector('#text');
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// let random;
// let timerId;
// start.addEventListener('click', function() {
//     this.classList.remove('active');
//     stop.classList.add('active');
    
//     timerId = setInterval(function() {
//         timer.textContent = random = getRandom(1, arr.length);
//     }, 100);
// });

// stop.addEventListener('click', function() {
//     this.classList.remove('active');
//     clearInterval(timerId);
    
//     text.textContent = arr[random - 1].text;
//     text.style.color =  arr[random - 1].color;
// });

// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

/////////////////// 11 ///////////////////////		
// let arr  = ['Belarus', 'Belgium', 'Bulgaria'];
// let elem = document.querySelector('#elem');
// let list = document.querySelector('#list');

// elem.addEventListener('input', function() {
//     list.textContent = '';
    
//     if (this.value !== '') {
//         let matches = arr.filter(item => item.startsWith(this.value));
        
//         if (matches.length > 0) {
//             for (let match of matches) {
//                 let li = document.createElement('li');
//                 li.textContent = match;
//                 list.appendChild(li);
                
//                 li.addEventListener('click', function() {
//                     elem.value = this.textContent;
//                     list.textContent = '';
//                 });
//             }
//         }
//     }
// });

/////////////////// 12 /////////////////////// 
// let toggles = document.querySelectorAll('.toggle');
// toggles.forEach(toggl => {
//     toggl.addEventListener('click', function(event) {
//         let spoiler = this.parentElement.nextElementSibling;
//         spoiler.classList.toggle('active');
//         event.preventDefault(); 
//     });
// });

/////////////////// 13 /////////////////////// 
// let parent = document.querySelector('#parent');
// let links  = parent.querySelectorAll('.menu a');
// let tabs   = parent.querySelectorAll('.tab');

// for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener('click', function(event) {
//         let activeLink = parent.querySelector('.menu a.active');
//         activeLink.classList.remove('active');
        
//         let activeTab = parent.querySelector('.tab.active');
//         activeTab.classList.remove('active');
        
//         tabs[i].classList.add('active');
//         this.classList.add('active');
        
//         event.preventDefault();
//     });
// }

/////////////////// 14 /////////////////////// 
// let parent = document.querySelector('#parent');
// let links  = parent.querySelectorAll('.tab .link a');

// for (let link of links) {
//     link.addEventListener('click', function(event) {
//         let activeTab = parent.querySelector('.tab.active');
        
//         if (activeTab) {
//             activeTab.classList.remove('active');
//         }
        
//         let newTab = link.closest('.tab');
//         if (newTab !== activeTab) {
//             newTab.classList.add('active');
//         }
        
//         event.preventDefault();
//     });
// }