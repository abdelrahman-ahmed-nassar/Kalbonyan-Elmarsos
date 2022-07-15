## Collection 

  grouping multiple Items together and storing them with a single name, called a variable 

The advantages of using collections
  1-Uses your code structure to indicate that multiple piece of data are related 
  2-Avoid creating a potentially huge number of variables to track within our code 
  3-Offers simplified syntax

```
# the first kind of collection is the list
# this is the syntax
friends = ["ali", "omar", "jon"]


cities = [
    'Tokyo',
    'Dakar',
    'Mumbai',
    'Buenos Aires',
]
```

```
# the second kind of the collection is the dictionary or the hash table
# each for each item there is a key or label and a value

california_symbols = {
    'bird': 'California quail',
    #key  :  value
    'animal': 'Grizzly bear',
    'flower': 'California poppy',
    'fruit': 'Avocado',
}


```


## list

in list every item have an index number 
Notice:
  the index in programming start from zero 

you can access an item in the list you write the list name followed by [the index of the item]


```

cities = [
    'Tokyo',
    'Dakar',
    'Mumbai',
    'Buenos Aires',
]

print(cities[1])
# the result will be => Dakar
```

## collection

  in dictionary to access an element you write the dictionary name followed by [the key]
```
california_symbols = {
    'bird': 'California quail',
    'animal': 'Grizzly bear',
    'flower': 'California poppy',
    'fruit': 'Avocado',
}
print(california_symbols["fruit"])

```

in Python, each item in a list can be of any data type.
So you could combine strings, numbers, and other types of data like Boolean values, all in the same list. 
But other languages, like C++, require that all values in this type of collection must be of the same data type. 
for instance, containing all strings or all numbers, but no combination of these or other types of data


In Python lists, or Python dictionaries, you can add or remove items, or you can change the value of an existing item.
We refer to these collections as mutable.
meaning they can be changed. 
But some programming languages support collections that are immutable, meaning that their values cannot change after they're created.
In fact, Python itself lets you create a collection known as a tuple, which is essentially an immutable list. 
Once you create a tuple, you can't change it\

what's known as a list in Python is called an array in JavaScript and C++. 
Python dictionaries are known variously as associate arrays, maps, or tables.