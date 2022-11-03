#Codewar Kata

# Challenge # 1 - A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

# Return True if yes, False otherwise :)

def hero(bullets, dragons):
    if bullets >= dragons*2:
        return True 
    else: 
        return False
    



#Test log
print(hero(10, 5));
print(hero(7, 4));
print(hero(4, 5));
print(hero(100, 40));
print(hero(1500, 751));
print(hero(0, 1));


# Better method of completing challenge:

# def hero(bullets, dragons):
    # return bullets >= dragons * 2

###############################################################################


#Codewar Kata

# Challenge # 2 - 
# DESCRIPTION:
# If you can't sleep, just count sheep!!

# Task:
# Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

def count_sheep(n):
    strFinal = ""

    for x in range(1, n+1):
        stringLoop = "{} sheep..."
        strFinal += stringLoop.format(x)
        

    return strFinal


#Test log
print(count_sheep(0));
print(count_sheep(1));
print(count_sheep(2));
print(count_sheep(3));


# Better method of completing challenge:

# def count_sheep(n):
#     return ''.join(f"{i} sheep..." for i in range(1,n+1))

###############################################################################

    



