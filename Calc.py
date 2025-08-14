#Ask the user for two numbers and an operation
Num=input("Enter the first Number: ")
Num2=input("Enter the second Number: ")
Operation=input("Enter the operation (+, -, *, /): ")

# Simple Calculator Program, The operation is performed based on user input
if Operation == '+':
    Result = float(Num) + float(Num2)
elif Operation == '-':
    Result = float(Num) - float(Num2)
elif Operation == '*':
    Result = float(Num) * float(Num2)
elif Operation == '/':
    if float(Num2) != 0:
        Result = float(Num) / float(Num2)
    else:
        Result = "Error: Division by zero is not allowed."
else:
    Result = "Error: Invalid operation."

# Display the result
print("The result is:", Result)

python [Calc.py](http://_vscodecontentref_/0)