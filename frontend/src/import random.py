import random
# Получить никнейм игрока
print("Введите ваш псевдоним:")
nick = input()
# создать из 4 звездочеек
while 1==1:
  while 1==1:
    print("Сколько тебе нужно ходов? 1-15")
    count = int(input())
    if count >= 1 and count <=15:
      break;
    else: print("не в диапозоне")

  pin = ['*'] * 4
  # Генерирование случайных 4-х чисел
  hide_pin = []
  for i in range(4):
    hide_pin.append(random.randint(0,9))
  # while * in array
  for j in range (count):
    if "*" in pin:
      # получение цифры
      print("Введите цифры")
      Number = input()
      # Поиск цифры по числу
        # ? заменить зведочк
      for i in range (4):
        if len(Number) != 4:
          print("try again")
          break;
        if Number[i] == str(hide_pin[i]):
          pin[i] = str(Number[i])
        if Number[i] != str(hide_pin[i]):
          pin[i] = "*"
        # : Написать пропробуйте заново
      print(*pin)
    else: print(nick + " win")
    # U Win 
  if "*" in pin: print(nick + " lose")
  print("Не хотите сыграть ещё разок? y/n")
  res = input()
  if res == "n":
    break;