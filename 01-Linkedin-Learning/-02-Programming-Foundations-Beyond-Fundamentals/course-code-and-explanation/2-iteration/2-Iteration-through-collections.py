# the list that will iterate through
spices = [
    'salt',
    'pepper',
    'cumin',
    'turmeric',
]
'''
for 
  specified a variable name that we can use in each iteration of the loop 
  to reference the current value and this name can be any thing

in 
  indicate that what follows is the set of values that we want to iterate through

End point
  When you specify a list as the data to iterate through.
  the for loop will automatically end with the last value in the list. 

every thing you need to iterate through 
make sure you indent it under the for loop 

'''
for spice in spices:
    print(spice)
print('No more boring omelettes!')
