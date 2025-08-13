# Basic Calculator Program

# Get input from user
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
operation = input("Enter operation (+, -, *, /): ")

# Perform calculation based on operation
if operation == '+':
    result = num1 + num2
elif operation == '-':
    result = num1 - num2
elif operation == '*':
    result = num1 * num2
elif operation == '/':
    result = num1 / num2

# Display result
print(f"{num1} {operation} {num2} = {result}")