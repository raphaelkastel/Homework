
import random
numArray = []
for i in range(11):
    for j in range(11):
        numArray.append(i*j)
print(numArray)

winnum = random.randint(1, 101)
while (True):
    try:
        yournum = int(input('Number please '))
    except:
        print("That's not a valid option!")
        continue
    if yournum > 100 or yournum < 1:
        print('Invalid number.')
        continue
    if yournum > winnum:
        print('lower')
    elif yournum < winnum:
        print('Higher')
    else:
        print('you win')
        break
