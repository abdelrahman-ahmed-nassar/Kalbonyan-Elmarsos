# you can make decision in code by using if statement
'''
If condition :
  do work if the condition is true 
End If 
'''
#! the indentation is important

# block: statements that are grouped together

# we can add one more condition by using else-if statement

name = input("Hi, what's your name? ")
age = int(input("How old are you? "))

if (age < 13):
    print("You're too young to register", name)
else:
    print("Feel free to join", name)


plant = "Irises"

if plant == "Cacti":
    print(plant, "don't need a lot of water")
else:
    print(plant, "love water")

print("Thanks!")
