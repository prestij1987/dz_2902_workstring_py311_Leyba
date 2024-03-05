// Словарь (ассоциативный массив) - это тип данных,
// в котором ключам соответстсвуют значения,
// подобно тому, как в обычном массиве значения
// соответствуют номерам (индексам), т.е. пронумерованы по порядку
// Запись и пример:

var groceries = {
    'огурцы' : 75,
    'лук'     : 30,
    'гречка'  : 100,
    'картошка': 60
 };
 // Обрамляется фигурными скобками
 // Ключи и соответствующие им значения разделяются двоеточием
 // пары "ключ": "значение" разделяются запятой
 
 // к элементам обычного массива можно обращаться по номеру (индексу)
 // к элементам ассоциативного массива обращаются по ключу
 
 // если ключа нет, будет получено undefined
 
 
 function food_card(name) {
     let food = document.createElement('img');
     food.setAttribute('src', name + '.jpg');
     food.style.width='130px';
     
     let kol_vo = document.createElement('input');
     kol_vo.id = name;
     kol_vo.type = 'number';
     kol_vo.placeholder = 'Количество';
     
     let input_button = document.createElement('input');
     input_button.setAttribute(
         'onclick', 'save(this)');
     input_button.setAttribute(
         'value', 'В корзину');
     input_button['tovar'] = name;
     input_button.type = 'button';  // можно и через setAttribute
     
     let cena = document.createElement('h1');
     let c = document.createTextNode(groceries[name] + ' руб.');
     cena.appendChild(c);
     
     document.body.appendChild(food);
     document.body.appendChild(cena);
     document.body.appendChild(kol_vo);
     document.body.appendChild(input_button);
 }
 
 
 function prepare_page() {
     // for (let counter = 0; counter < 10; counter ++) {}
     // Перебор ассоциативного массива по ключу
     // создается переменная, которая на каждом витке
     // принимает по очереди все ключи
     // Когда заканчивается словарь, заканчивается цикл
     // ОСТОРОЖНО! НЕ меняйте словарь в таком цикле
     // Это было бы похоже на книгу, у которой в процессе
     // чтения выдирают или вставляют страницы
     for (let tovar in groceries) {
         console.log(tovar, groceries[tovar]);
         food_card(tovar);
     }
 }
 
 var polnaya_cena = 0;
 
 function correct_table(){
     let tbl = document.getElementById('check');
     // tbl.childNodes - список дочерних элементов объекта
     // Чтобы получить список дочерних элементов, обращаемся к полю родительского элемента
     // Чтобы создать элемент, используем document
     // Создать, например, ячейку таблицы:
     let tdshka = tbl.childNodes[1].childNodes[0].childNodes[1];
  
 }
 
 function save(kogo_najali) {
     console.log(kogo_najali.tovar);
     // поля берутся из атрибутов
     // значения атрибутов можно получитть, обращаясь к полям на чтение
     let kolich = document.getElementById(
                      kogo_najali.tovar);
     console.log(kolich.value, typeof kolich.value);
     let price = groceries[kogo_najali.tovar];
     let tbl = document.getElementById('check');
     tbl.innerHTML += '<tr id="' + kogo_najali.tovar + 
                      '_row"><td>' + kogo_najali.tovar + 
                      '</td><td>' + price + 
                      ' rub</td><td>' + kolich.value + 
                      ' kg</td></tr>';
     // Добавляем ряд таблицы старым способом - через innerHTML
     // id= - это часть атрибута id для строки таблицы
     // его значение собирается из id кнопки, на которую мы нажали
     // и _row
     let summa = kolich.value * price;
     polnaya_cena += summa;
     let row = document.getElementById(
                    kogo_najali.tovar + '_row');
     // теперь по этому айдишнику мы ищем этот
     // ряд в виде объекта в документе
     let tdshka = document.createElement('td');
     // Создать элемент (тэг) с указанным именем!
     let soderjimoe = document.createTextNode(
                     summa + ' рублей');
     // Создали содержимое ячейки, но ячейка не знает,
     // что это ЕЁ содержимое!
     // надо ей (ячейке) добавить дочерний элемент!
     tdshka.appendChild(soderjimoe);
     row.appendChild(tdshka);
     
     itogo();
 
 }
 function save_author() {
     //console.log(total(price, amount));
     let kolich_carrot = document.getElementById('car');
     let kolich_onion = document.getElementById('on');
     let kolich_buckwheat = document.getElementById('buck');
     let amount = [kolich_carrot, kolich_onion, kolich_buckwheat];
     let tbl = document.getElementById('check');
     tbl.innerHTML += '<tr><td>' + groceries.at(0) + '</td>' + '<td>' + price.at(0) + ' rub</td>' + '<td>' + kolich_carrot.value + ' kg</td></tr>';
     
     document.getElementById('total').innerHTML = itogo(price, amount)
 
 }
 function itogo() {
     let itog = document.getElementById('total');
     itog.innerHTML = polnaya_cena + ' рубю ';
 }