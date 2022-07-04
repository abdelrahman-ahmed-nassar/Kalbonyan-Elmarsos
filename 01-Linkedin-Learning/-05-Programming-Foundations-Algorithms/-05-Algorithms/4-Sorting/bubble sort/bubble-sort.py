'''
Bubble sort 
  very simple to understand 
  Performance: O(n^2)
    for loops inside of for loops are usually n^2 
  Other sorting algorithms are generally much better 
  Not considered to be a practical solution 
  but it used for teaching goals  
'''

# first come into the list
# take the first two numbers and compare them
# make the smallest first
# then move to the second and the third and compare them
# make the smallest first
# and go like that until finish the list
# then start over but this time will start from the second item and so on


def bubbleSort(dataset):  # the word database refer to the list 1
    # start with the array length and decrement each time
    # mean range (9, 0,-1) the -1  refer to make it descendant
    for i in range(len(dataset)-1, 0, -1):
        # examine each item pair
        for j in range(i):
            # swap items if needed
            if dataset[j] > dataset[j+1]:
                temp = dataset[j]
                dataset[j] = dataset[j+1]  # switch the first element
                dataset[j+1] = temp  # switch the second element

        print("Current state: ", dataset)

# a function for viewing the sorting process


def main():
    list1 = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]
    print("Starting state: ", list1)
    bubbleSort(list1)
    print("Final state: ", list1)


if __name__ == "__main__":
    main()
