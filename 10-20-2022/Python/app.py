#Codewar Kata

# Challenge # 1 - Write a function which calculates the average of the numbers in a given list.

def find_average(numbers):
    return sum(numbers) / len(numbers)
    


#Test log
print(find_average([1, 2, 3]))
print(find_average([2, 2, 3, 3]))
print(find_average([5, 2, 3, 10]))

# Better method of completing challenge:

# def find_average(array):
#     return sum(array) / len(array) if array else 0

###############################################################################


#Codewar Kata

# Challenge # 2 - Simple, remove the spaces from the string, then return the resultant string.

def no_space(x):
    return x.replace(" ", "")





#Test log
print(no_space('8 j 8   mBliB8g  imjB8B8  jl  B'))
print(no_space('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'))
print(no_space('8aaaaa dddd r     '))

# Better method of completing challenge:

# *** I RETURNED THE IDEAL CODE :) ***

###############################################################################

#Codewar Kata

# Challenge # 3 - Your task is to find the first element of an array that is not consecutive.

# By not consecutive we mean not exactly 1 larger than the previous element of the array.

# E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

# If the whole array is consecutive then return null2.

# The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

def first_non_consecutive(arr):
    for x in range(1, len(arr)):
        if arr[x] - 1 == arr[x-1]:
            continue
        else:
             return arr[x]

    return None



    
#Test log
print(first_non_consecutive([1,2,3,4,6,7,8]))
print(first_non_consecutive([1,2,3,4,5,6,7,8]))
print(first_non_consecutive([4,5,6,7,8,9,11]))

# Better method of completing challenge:

# def first_non_consecutive(arr):
#     if not arr: return 0
#     for i, x in enumerate(arr[:-1]):
#         if x + 1 != arr[i + 1]:
#             return arr[i + 1]

###############################################################################
    



