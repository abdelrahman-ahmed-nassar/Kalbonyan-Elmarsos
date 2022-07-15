**Iteration** 
  Repeats the same procedure multiple times until it reaches a specific endpoint.

**Loop** 
  Code that iterates, moving from the beginning to end of the process, then starting over 

the things you need to make an Iteration
  1- specify the data
  2- what should happen to the data during each iteration 
  3- indicate when the loop should stop

**Infinite loop** 
  Bug that can occur when the ending condition is omitted or specified incorrectly 



**for loop** 
  specified a variable name that we can use in each iteration of the loop 
  to reference the current value and this name can be any thing

**in** 
  indicate that what follows is the set of values that we want to iterate through

**End point**
  When you specify a list as the data to iterate through.
  the for loop will automatically end with the last value in the list. 

every thing you need to iterate through 
make sure you indent it under the for loop 



```
# the list that will iterate through
spices = [
    'salt',
    'pepper',
    'cumin',
    'turmeric',
]

for spice in spices:
    print(spice)
print('No more boring omelettes!')
```


In programming
when you'm writing code I need to continue a loop until the program arrives at a certain state.
In Python, you use a while statement to create this type of loop. 


o get started with a while loop we commonly use a variable that will be modified on each iteration through the loop. 
The name doesn't matter, but you'll often see the variable name i, which is short for iterator.


```
print('Counting to 100 by fives:')
i = 5
while i <= 100:  # mean while that condition is true
    print(i)
    i = i + 5
print('List complete!')
```