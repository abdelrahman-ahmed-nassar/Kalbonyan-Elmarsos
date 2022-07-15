## OOP

object-oriented programming 
  break the code into objects 
  each object have attributes 
  and have method => behavior 
  we make objects with blueprint called class  

```
flips = [
    'heads',
    'tails',
    'tails',
    'heads',
    'tails',
]
# a list is an object that have methods that can be executed
print(flips.count('heads'))
print(flips.pop())

```

```
class Attendee:
    'Common base class for all attendees'

    def __init__(self, name, tickets):
        self.name = name
        self.tickets = tickets

    def displayAttendee(self):
        print('Name : {}, Tickets: {}'.format(self.name, self.tickets))

    def addTicket(self):
        self.tickets += 1
        print('{} tickets increased to {}'.format(self.name, self.tickets))


attendee1 = Attendee('B. Giles', 2)
attendee2 = Attendee('J. Ortega', 1)
attendee1.displayAttendee()
attendee2.displayAttendee()
attendee2.addTicket()
attendee2.addTicket()


```