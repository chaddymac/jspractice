# variable1 = input("Whats your first number?")
# variable2 = input("whats your second number?")

# variable1 = int(variable1)
# variable2 = int(variable2)
# print(variable1, end = "")
# print("+", end = "")
# print(variable2, end = "")
# print("=", end = "")
# print(variable1+variable2)
# print(variable1, end = "")
# print("-", end = "")
# print(variable2, end = "")
# print("=", end = "")
# print(variable1-variable2)
# print(variable1, end = "")
# print("*", end = "")
# print(variable2, end = "")
# print("=", end = "")
# print(variable1*variable2)
# print(variable1, end = "")
# print("/", end = "")
# print(variable2, end = "")
# print("=", end = "")
# print(variable1/variable2)

a = input("What is your first number? ")
b = input("What is your second number? ")

num1 = int(a)
num2 = int(b)

add = num1 + num2
sub = num1 - num2
mul = num1 * num2
div = num1 / num2

print(f'{num1}+{num2}= {add}')
print(f'{num1}-{num2}={sub}')
print(f'{num1}*{num2}={mul}')
print(f'{num1}/{num2}= {div}')

