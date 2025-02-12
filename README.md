# Random-Password-Generator-
Generate strong and secured password . 
# Password Generator
import random
import string
# Define the characters that can be used in the password
characters = string.ascii_letters + string.digits + string.punctuation
# Function to generate a password of a specified length
def generate_password(length):
# Generate a password of the specified length
password = ''.join(random.choice(characters) for i in range(length))
return password
# Test the function with a password length of 12
print(generate_password(12))

