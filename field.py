'''Спросить человека размеры поля (х * у), получить их 
ОДНИМ вводом '7x8', "нарисовать" поле буковками о без 
использования цикла.Нарисовать только границу 
поля и пустую серединку.'''

os_1 = input('Введите длину ')
os_2 = input('Введите ширину ')
znak = 'x'

#os_x = int(os_1)
#os_y = int(os_2)
os_all = os_1 + znak + os_2
size_1 = 'o' * 7
size_2 = 'o' * 8


if os_1 in [0, size_1-1] or os_2 in [0, size_2-1]:
    print('finish')

print(size_1, size_2, sep='\n')

#print(os_all)
#print(st*10, end='\n')
