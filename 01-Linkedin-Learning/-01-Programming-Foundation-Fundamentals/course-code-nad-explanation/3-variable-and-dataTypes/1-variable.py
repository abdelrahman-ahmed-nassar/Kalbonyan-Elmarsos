age = 36
print(age)
# age: the name of the variable
# = : the assignment operator
# 36 : the value that will be stored in the variable


#! when you use string => we put it inside a quotation mark.
name = "ali"
print(name)

# ? how can we the type of the data that inside our variables ?

# you can do that by using the type() function
print(type(age))
# the result will be [int]
print(type(name))
# the result will be [str]


# *   Variable across language

'''
some language  require that you define your variables and their types before you can use them, like Java, C#, and C++.
example in java 
  string cookie = "sugar";
  system.out.println(cookie);

in other language 
like Python, we don't need to declare a variable's type before using it.
'''

#!  Name convention for variables

'''
Name can contain only :
  letters
  numbers
  underscores

Notice:
  the name can't start with number
  Don't use white space, instead use underscore 
  the name in programming is case sensitive 
  variable can not be keywords  that words which are reserved by the language like If, For, none
  to know all the key words run this code 
  import keyword 
  print(keyword.kwlist)
'''
