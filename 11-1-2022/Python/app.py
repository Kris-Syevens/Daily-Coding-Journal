#Codewar Kata

# Challenge # 1 - Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

def powers_of_two(n):
    arr = []
    for x in range(0,n+1):
        print(x)
        arr.append(pow(2,x))
    return arr



#Test log
# print(powers_of_two(0));
# print(powers_of_two(1));
# print(powers_of_two(4));

# Better method of completing challenge:

# def powers_of_two(n):
#     return [2**x for x in range(n+1)]

###############################################################################


#Codewar Kata

# Challenge # 2 - Write function bmi that calculates body mass index (bmi = weight / height2).

# if bmi <= 18.5 return "Underweight"

# if bmi <= 25.0 return "Normal"

# if bmi <= 30.0 return "Overweight"

# if bmi > 30 return "Obese"

def bmi(weight, height):
    bmi = weight / (height**2)

    if bmi > 30:
        return 'Obese'
    elif bmi > 25 and bmi <= 30:
        return "Overweight"
    elif bmi > 18.5 and bmi <= 25:
        return "Normal"
    else: 
        return "Underweight"



#Test log
# print();
# print();
# print();

# Better method of completing challenge:

# NONE

###############################################################################

#Codewar Kata

# Challenge # 3 - This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

def simple_multiplication(number) :
    # Your code goes here
    if number % 2 == 0:
        return number * 8
    else:
        return number * 9

#Test log
# print();
# print();
# print();

# Better method of completing challenge:

# def simple_multiplication(number) :
#     return number * 9 if number % 2 else number * 8

###############################################################################
    



