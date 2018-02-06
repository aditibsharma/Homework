import re
import os
numlines = 0
numwords = 0
numchars = 0

filepath = os.path.join('.', 'myfile.txt')
with open("paragraph_2.txt", "r") as text_file:
    for line in text_file:
        #Count of words
        wordslist = line.split()
        #numlines = re.split("(?&lt;=[.!?]) +", paragraph_1)
        numwords += len(wordslist)
        #numchars += len(line)

        #re.split("(?&lt;=[.!?]) +", paragraph)

print("Paragraph Analysis")
print("-----------------")
print("Approximate Word Count: " + str(numwords))
print("Approximate Sentence Count:" + str(numlines))
print("Average Letter Count:" + str(numchars))
print("Average Sentence Length:")