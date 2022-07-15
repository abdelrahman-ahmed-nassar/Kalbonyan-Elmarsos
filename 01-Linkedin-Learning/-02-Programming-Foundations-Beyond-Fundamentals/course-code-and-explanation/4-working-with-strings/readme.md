## working with strings

**concatenation**:  when multiple strings are combined into a single string
in python we used the plus sign to cancatenate strings

**slicing**: getting part of a string value

```
value = input('Enter a number: ')
  # every thing come from an input come as string
print(value + ' is my favorite number!')
print('When you multiply it by 10, this is what you get:')
  # to convert the string into number we use the int() function and you can store it into variable
value_int = int(value)
print(value_int * 10)
```
**finding patters in strings**
```
first_name = 'malala'
last_name = 'ali'
note = 'award: Nobel Peace Prize'
# to make all the letter capital we use the capitalize function
first_name_cap = first_name.capitalize()
last_name_cap = last_name.capitalize()
# to find an item you can use the find function
award_location = note.find('award: ')
award_text = note[7:]

print(first_name_cap)
print(last_name_cap)
print(award_location)
print(award_text)
```

## REGULAR EXPREsSION

regular expression (Regex): Allow you to create a description of the pattern that you want to match
can be made up of letters, numbers and special characters. 
But within a regular expression each character has a specific meaning 
and you can put them together to describe exactly what you need.

/hello/
/d  =>indicates  digit 
/w  =>indicates  word character like a letter
.   =>indicates  any character
+   =>indicates one or more occurrence of the preceding pattern. 
*   =>indicates zero or more 
?   =>indicates zero or one


```
import re

five_digit_zip = '98101'
nine_digit_zip = '98101-0003'
phone_number = '234-567-8901'

five_digit_expression = r'\d{5}'

print(re.search(five_digit_expression, five_digit_zip))
print(re.search(five_digit_expression, nine_digit_zip))
print(re.search(five_digit_expression, phone_number))
```