### Identifying-inheritance

- Inheritance is one of the four key concepts of object orientation.
  It allows one or more classes to inherit the attributes and methods of another class, referred to as the parent or superclass.
  The inheriting subclasses or child classes automatically have all of the attributes and methods of their parent class.
  And they can have their own unique attributes and methods in addition to those.

Inheritance describes an "is a" or "is kind of" relationship between objects.

Overriding
Allowing a subclass to replace the implementation of a method from the superclass

### use inheritance Java

```
public class CargoShuttle extends Spaceship {..}
// overriding
Super.setShield()
```

### use inheritance Python

```
class CargoShuttle(spaceship):...

# overriding
super().setShield()

```

### Abstract-and-concrete-classes

Abstract class
Exist for other classes to inherit
Cannot be instantiated
Contain at least one abstract method

### interface

- Interfaces are another common form of abstraction that's supported by many object-oriented languages.

Interface
list of methods for a class to implement.
It doesn't contain any actual behavior.
you're not allowed to put any functionality inside an interface.

EX: (java)
interface Moveable {
void move (int x, int y)
}

Interfaces are used to represent a capability that a class implements. Whereas and abstract class represents a type that another class can inherit from.

### aggregation

aggregation is another type of object relationship in which one object is built of other objects.

"Has a" relation ship OR " Uses a" or "Uses many"

### composition

composition is based around a has-a relationship between objects but it specifically implies ownership

Composition implies ownership

ey difference between composition and aggregation is that in a composition situation,
