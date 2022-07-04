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
