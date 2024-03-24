
'''Спросить месяц и год
Вывести "календарь"
например
2024
2
пн вт ср чт пт сб вс
          1  2  3  4
 5  6  7  8  9 10 11
12 13 14 15 16 17 18
19 20 21 22 23 24 25
26 27 28 29'''

months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

days_in_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


current_year = int(input('Введите год '))


current_month = int(input('Введите номер месяца '))

# Определение текущего дня
current_day = 1

# Определение количества дней в текущем месяце
current_days_in_month = days_in_months[current_month - 1]

# Определение количества дней в текущем году
current_days_in_year = 0

# Цикл для вывода календаря
while current_day <= current_days_in_month:
    #  вывод дня недели
    if current_day == 1:
        print('Понедельник')
    elif current_day == 2:
        print('Вторник')
    elif current_day == 3:
        print('Среда')
    elif current_day == 4:
        print('Четверг')
    elif current_day == 5:
        print('Пятница')
    elif current_day == 6:
        print('Суббота')
    elif current_day == 7:
        print('Воскресенье')

    # вывод текущего дня
    if current_day <= 9:
        print(' ' + str(current_day))
    else:
        print(str(current_day))

   
    current_day += 1

    # Увеличение текущего количества дней в году
    current_days_in_year += 1

   
    if current_day > current_days_in_month:
        print('')
        current_month += 1
        current_days_in_month = days_in_months[current_month - 1]
        current_day = 1
print(' Пн Вт Cр Чт Пт Сб Вс')
print(f'{current_year} - {months[current_month - 1]}')