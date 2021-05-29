import random
for i in range(20):
    print(f'{i+1},{i+1}')

for i in range(100):
    k = random.randint(1,20)
    l = random.randint(1,20)
    if k!=l:
        print(f'{k},{l},1')