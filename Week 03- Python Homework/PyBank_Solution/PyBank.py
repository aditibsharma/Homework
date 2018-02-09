# Creating a Python script for analyzing the financial records of the company. 

#The total number of months included in the dataset
#The total amount of revenue gained over the entire period
#The average change in revenue between months over the entire period
#The greatest increase in revenue (date and amount) over the entire period
#The greatest decrease in revenue (date and amount) over the entire period

import os
import csv
filepath = os.path.join("..", "PyBank_Solution","budget_data_2.csv")

with open("budget_data_2.csv", "r") as csvfile:
    csv_reader = csv.reader(csvfile, delimiter =",")
    csv_header = next(csv_reader)
    file_to_output = "budget_analysis.txt"

    total_revenue = 0
    total_months = 0
    revenue_length = 0   
    avg_revenue_change = 0
    max_revenue_change = 0
    min_revenue_change = 0
    max_revenue_change_date = None
    min_revenue_change_date = None
    revenue = []
    revenue_change = []
    date = []

    for row in csv_reader:
        
        total_months = total_months + 1  #Calculating total months
        
        total_revenue = total_revenue + int(row[1]) #Calculating total revenue
        revenue.append(row[1])  #Preparing revenue list
        date.append(row[0])     #Preparing date list


#Calculating change in revenue for average and min, max scenarios

    for i in range(len(revenue)-1):
        change= int(revenue[i+1]) - int(revenue[i]) 
        revenue_change.append(change)

    avg_revenue_change = abs(sum(revenue_change)/len(revenue_change)) #Calculating average change in revenue between months over the entire period

    max_revenue_change = max(revenue_change)        #Calculating Max revenue change
    min_revenue_change = min(revenue_change)        #Calculating Min revenue change


    max_revenue_change_date = str(date[revenue_change.index(max(revenue_change))])
    min_revenue_change_date = str(date[revenue_change.index(min(revenue_change))])

#Printing all the outputs
    print("Financial Analysis")
    print("----------------------------")

    ##The total number of months included in the dataset
    print("Total Months: " + str(total_months))
    
    #The total amount of revenue gained over the entire period
    print("Total Revenue: " + "$" + str(total_revenue))

    #The average change in revenue between months over the entire period
    print("Average Revenue Change: " + "$" + str(avg_revenue_change))

    #The greatest increase in revenue (date and amount) over the entire period
    print("Greatest Increase in Revenue: " + str(max_revenue_change_date)+ " ($" + str(max_revenue_change) +")")

    #The greatest decrease in revenue (date and amount) over the entire period
    print("Greatest Decrease in Revenue: " + str(min_revenue_change_date)+ " ($" + str(min_revenue_change) +")")


    #Ouput to a text file
with open(file_to_output, "w") as txt_file:
    txt_file.write("Total Months: " + str(total_months))
    txt_file.write("\n")
    txt_file.write("Total Revenue: " + "$" + str(total_revenue))
    txt_file.write("\n")
    txt_file.write("Average Change: " + "$" + str(avg_revenue_change))
    txt_file.write("\n")
    txt_file.write("Greatest Increase: " + str(max_revenue_change_date)+ " ($" + str(max_revenue_change) +")") 
    txt_file.write("\n")
    txt_file.write("Greatest Decrease: " + str(min_revenue_change_date)+ " ($" + str(min_revenue_change)+")")