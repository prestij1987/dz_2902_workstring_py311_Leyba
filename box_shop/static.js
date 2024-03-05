//JS + HTML

var list_1 = ['картошка', 'мясо', 'яблоко']
var list_all = []

function price(){
let cena_kart= 50;
let cena_myso = 300;
let cena_yablok = 80;
    
let kolvo_1 = 1;
let kolvo_2 = 5;
let kolvo_3 = 10;

var food = document.getElementById('foods');

let sum_kart = cena_kart * kolvo_1;
let sum_myso = cena_myso * kolvo_2;
let sum_yablok = cena_yablok * kolvo_3;

var sums = document.getElementById('sum').value

var money = 500

if (sum_kart < money && sun_yablok < money){
var buy_1 =  sum_kart + sun_yablok;
console.log('Ваша первая покупка стоимость: ', buy_1)
} else if (sum_kart > money && sum_yablok > money){
    var buy_2 = sum_kart + sum_yablok;
    console.log('Вы много потратили сумма: ', buy_2)
} else if (sum_myso > money){
    console.log('Покупки окончены')
}
results =  sums
itog.innerHTML = results
return results


}
function summa (){

but = document.getElementById('click').value
sum_myso.innerHtml


tbl.innerHTML += '<tr><td>' + list_1[0] + '</td>' + '<td>' + cena_kart + ' rub</td>' + '<td>' + kolvo_1.value + ' kg</td></tr>';
	
	document.getElementById('click').innerHTML = itogo(cena_myco, kolvo_2)
}


food.value;
console.log(food)







//tbl.innerHTML += '<tr><td>' + my_time + '</td>';
//tbl.innerHTML += '<td>' + kilom.value + ' km</td></tr>';







