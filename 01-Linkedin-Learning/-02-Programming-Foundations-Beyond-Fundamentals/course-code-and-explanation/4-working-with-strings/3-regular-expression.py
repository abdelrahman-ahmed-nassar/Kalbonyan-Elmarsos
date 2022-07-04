import re
# regular expression (Regex):
# Allow you to create a description of the pattern that you want to match
'''
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
'''
five_digit_zip = '98101'
nine_digit_zip = '98101-0003'
phone_number = '234-567-8901'

five_digit_expression = r'\d{5}'

print(re.search(five_digit_expression, five_digit_zip))
print(re.search(five_digit_expression, nine_digit_zip))
print(re.search(five_digit_expression, phone_number))
