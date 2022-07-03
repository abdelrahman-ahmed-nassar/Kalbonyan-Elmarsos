
'''
Parameters - they allow functions to change their behavior based on some input.

Arguments - the name used for the values given to functions
'''


def wash_car(amount_paid):
  # amount_paid   is the parameter
    if (amount_paid == 12):
        print("Wash with tri-color foam")
        print("Rinse twice")
        print("Dry with large blow dryer")

    if (amount_paid == 6):
        print("Wash with white foam")
        print("Rinse once")
        print("Air dry")


wash_car(6)
# 6 is the argument
