import random
import time
import os
import keyboard

arr = [["."]*10]
for i in range(15):
  arr.append(["."]*10)

# РАНДОМНЫЙ столбик
# строка увеличивалась на 1
k=1
while k == 1:
  if keyboard.is_pressed('Right'):
    x+=1
  x = random.randint(0, 9)
  y = 0
  while y<=15:
    if "." not in arr[len(arr)-1]:
      arr[len(arr)-1] = [["."]*10]
      arr = arr[len(arr)-1] + arr[0:len(arr)-1]
    os.system('clear')
    arr[y][x] = "#"
    if y > 0:
      arr[y-1][x] = "."

    y += 1 

    for i in range(len(arr)):
      print(*arr[i])

    if y == len(arr) or arr[y][x] == "#":
        if y == 1:
          print("SDsdfa")   
          k=2       
        break;

    time.sleep(0.001)

