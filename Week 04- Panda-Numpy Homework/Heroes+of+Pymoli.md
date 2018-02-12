
#Heroes Of Pymoli Data Analysis 

OBSERVED TREND 1:
Gender Demographics: 81.15% of players are male as compared to female and other users. We can improve the interface so as to provide user experience which is appealing to all the genders.

OBSERVED TREND 2:
Age Demographics: Players from 20-24 ages are the top users.There is a huge transition in number for players from 25-29. We can look at improving the stages in the game in order to attract players from the age group 25-29. It will need some research to understand the trend about other popular games to include improvements.

OBSERVED TREND 3:
Purchasing Analysis: Highest total purchase value is achieved by male users with $1867.68 revenue. The game can be improved in a way to increase the number of female and other users by including new features or improving the existing ones.


```python
# Import the Pandas library
import pandas as pd
```


```python
# load json file
json_path = "../Week 04- Panda-Numpy Homework/purchase_data.json"
df = pd.read_json(json_path)
df.head()
```




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Age</th>
      <th>Gender</th>
      <th>Item ID</th>
      <th>Item Name</th>
      <th>Price</th>
      <th>SN</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>38</td>
      <td>Male</td>
      <td>165</td>
      <td>Bone Crushing Silver Skewer</td>
      <td>3.37</td>
      <td>Aelalis34</td>
    </tr>
    <tr>
      <th>1</th>
      <td>21</td>
      <td>Male</td>
      <td>119</td>
      <td>Stormbringer, Dark Blade of Ending Misery</td>
      <td>2.32</td>
      <td>Eolo46</td>
    </tr>
    <tr>
      <th>2</th>
      <td>34</td>
      <td>Male</td>
      <td>174</td>
      <td>Primitive Blade</td>
      <td>2.46</td>
      <td>Assastnya25</td>
    </tr>
    <tr>
      <th>3</th>
      <td>21</td>
      <td>Male</td>
      <td>92</td>
      <td>Final Critic</td>
      <td>1.36</td>
      <td>Pheusrical25</td>
    </tr>
    <tr>
      <th>4</th>
      <td>23</td>
      <td>Male</td>
      <td>63</td>
      <td>Stormfury Mace</td>
      <td>1.27</td>
      <td>Aela59</td>
    </tr>
  </tbody>
</table>
</div>




```python
#Calculate Total Number of Players
player_count = df['Age'].count()
player_count
pd.DataFrame([player_count], columns = ["Total Players"])
```




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Total Players</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>780</td>
    </tr>
  </tbody>
</table>
</div>



#CalculatePurchasing Analysis (Total)


```python
#Calculate Number of Unique Items
unique_items = len(df['Item ID'].unique())                    
unique_items
pd.DataFrame([unique_items], columns = ["Unique Items"])
```




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Unique Items</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>183</td>
    </tr>
  </tbody>
</table>
</div>




```python
#Calculate Average Purchase Price
avg_pur_price = df['Price'].mean()
print(f" Average Purchase price: {round(avg_pur_price)}")
pd.DataFrame([avg_pur_price], columns = ["Average Purchase price"])
```

     Average Purchase price: 3





<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Average Purchase price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2.931192</td>
    </tr>
  </tbody>
</table>
</div>




```python
#Calculate Total Number of Purchases
total_purchases = df['Item Name'].count()
pd.DataFrame([total_purchases], columns = ["Total Purchases"])
```




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Total Purchases</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>780</td>
    </tr>
  </tbody>
</table>
</div>




```python
#Calculate Total Revenue
total_revenue = df['Price'].sum()
pd.DataFrame([total_revenue], columns = ["Total Revenue"])
```




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Total Revenue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2286.33</td>
    </tr>
  </tbody>
</table>
</div>




```python
#Gender Demographics
#Percentage and Count of Male Players
total_gender = df["Gender"].count()
male = df["Gender"].value_counts()['Male']
male #Calculating count of male players
male_percent = male/total_gender * 100

#Percentage and Count of Female Players
female = df["Gender"].value_counts()['Female']
female #Calculating count of female players
female_percent = female/total_gender * 100

#Percentage and Count of Other / Non-Disclosed

other = df["Gender"].value_counts()['Other / Non-Disclosed']
other
other_percent = other/total_gender * 100

gender_demographics = pd.DataFrame({"Gender": ["Male", "Female", "Other / Non-Disclosed"], "Percentage of Players": [male_percent, female_percent, other_percent],
                                        "Total Count": [male, female, other]}, columns = 
                                        ["Gender", "Percentage of Players", "Total Count"])

#printing data                                        
gender_demographics_df = gender_demographics.set_index("Gender")
gender_demographics_df.style.format({"Percentage of Players": "{:.2f}%"})
```




<style  type="text/css" >
</style>  
<table id="T_b09bccfa_0fc8_11e8_b264_a8667f361cf9" > 
<thead>    <tr> 
        <th class="blank level0" ></th> 
        <th class="col_heading level0 col0" >Percentage of Players</th> 
        <th class="col_heading level0 col1" >Total Count</th> 
    </tr>    <tr> 
        <th class="index_name level0" >Gender</th> 
        <th class="blank" ></th> 
        <th class="blank" ></th> 
    </tr></thead> 
<tbody>    <tr> 
        <th id="T_b09bccfa_0fc8_11e8_b264_a8667f361cf9level0_row0" class="row_heading level0 row0" >Male</th> 
        <td id="T_b09bccfa_0fc8_11e8_b264_a8667f361cf9row0_col0" class="data row0 col0" >81.15%</td> 
        <td id="T_b09bccfa_0fc8_11e8_b264_a8667f361cf9row0_col1" class="data row0 col1" >633</td> 
    </tr>    <tr> 
        <th id="T_b09bccfa_0fc8_11e8_b264_a8667f361cf9level0_row1" class="row_heading level0 row1" >Female</th> 
        <td id="T_b09bccfa_0fc8_11e8_b264_a8667f361cf9row1_col0" class="data row1 col0" >17.44%</td> 
        <td id="T_b09bccfa_0fc8_11e8_b264_a8667f361cf9row1_col1" class="data row1 col1" >136</td> 
    </tr>    <tr> 
        <th id="T_b09bccfa_0fc8_11e8_b264_a8667f361cf9level0_row2" class="row_heading level0 row2" >Other / Non-Disclosed</th> 
        <td id="T_b09bccfa_0fc8_11e8_b264_a8667f361cf9row2_col0" class="data row2 col0" >1.41%</td> 
        <td id="T_b09bccfa_0fc8_11e8_b264_a8667f361cf9row2_col1" class="data row2 col1" >11</td> 
    </tr></tbody> 
</table> 




```python
#Purchasing Analysis (Gender)

#The below each broken by gender

#Purchase Count
gender_groups = df.groupby(['Gender'])
purchase_count = gender_groups.count()["Price"]

#Average Purchase Count
avg_pur_count = gender_groups.mean()["Price"]

#Total Purchase Value
total_pur_value = gender_groups.sum()["Price"]

#Normalized Totals
norm_total = total_pur_value/purchase_count

pur_analysis = pd.DataFrame({
    
    "Purchase Count": purchase_count,
    'Average Purchase Price': avg_pur_count,
    'Total Purchase value': total_pur_value,
    'Normalised totals': norm_total
})

#printing data
#printing data
pur_analysis.style.format({"Purchase Count": "{:.2f}", "Average Purchase Price": "${:.2f}", "Total Purchase Value":"${:.2f}", "Normalised Totals":"${:.2f}"})

```




<style  type="text/css" >
</style>  
<table id="T_b0a5cb58_0fc8_11e8_920a_a8667f361cf9" > 
<thead>    <tr> 
        <th class="blank level0" ></th> 
        <th class="col_heading level0 col0" >Average Purchase Price</th> 
        <th class="col_heading level0 col1" >Normalised totals</th> 
        <th class="col_heading level0 col2" >Purchase Count</th> 
        <th class="col_heading level0 col3" >Total Purchase value</th> 
    </tr>    <tr> 
        <th class="index_name level0" >Gender</th> 
        <th class="blank" ></th> 
        <th class="blank" ></th> 
        <th class="blank" ></th> 
        <th class="blank" ></th> 
    </tr></thead> 
<tbody>    <tr> 
        <th id="T_b0a5cb58_0fc8_11e8_920a_a8667f361cf9level0_row0" class="row_heading level0 row0" >Female</th> 
        <td id="T_b0a5cb58_0fc8_11e8_920a_a8667f361cf9row0_col0" class="data row0 col0" >$2.82</td> 
        <td id="T_b0a5cb58_0fc8_11e8_920a_a8667f361cf9row0_col1" class="data row0 col1" >2.81551</td> 
        <td id="T_b0a5cb58_0fc8_11e8_920a_a8667f361cf9row0_col2" class="data row0 col2" >136.00</td> 
        <td id="T_b0a5cb58_0fc8_11e8_920a_a8667f361cf9row0_col3" class="data row0 col3" >382.91</td> 
    </tr>    <tr> 
        <th id="T_b0a5cb58_0fc8_11e8_920a_a8667f361cf9level0_row1" class="row_heading level0 row1" >Male</th> 
        <td id="T_b0a5cb58_0fc8_11e8_920a_a8667f361cf9row1_col0" class="data row1 col0" >$2.95</td> 
        <td id="T_b0a5cb58_0fc8_11e8_920a_a8667f361cf9row1_col1" class="data row1 col1" >2.95052</td> 
        <td id="T_b0a5cb58_0fc8_11e8_920a_a8667f361cf9row1_col2" class="data row1 col2" >633.00</td> 
        <td id="T_b0a5cb58_0fc8_11e8_920a_a8667f361cf9row1_col3" class="data row1 col3" >1867.68</td> 
    </tr>    <tr> 
        <th id="T_b0a5cb58_0fc8_11e8_920a_a8667f361cf9level0_row2" class="row_heading level0 row2" >Other / Non-Disclosed</th> 
        <td id="T_b0a5cb58_0fc8_11e8_920a_a8667f361cf9row2_col0" class="data row2 col0" >$3.25</td> 
        <td id="T_b0a5cb58_0fc8_11e8_920a_a8667f361cf9row2_col1" class="data row2 col1" >3.24909</td> 
        <td id="T_b0a5cb58_0fc8_11e8_920a_a8667f361cf9row2_col2" class="data row2 col2" >11.00</td> 
        <td id="T_b0a5cb58_0fc8_11e8_920a_a8667f361cf9row2_col3" class="data row2 col3" >35.74</td> 
    </tr></tbody> 
</table> 




```python
#Age Demographics

#The below each broken into bins of 4 years (i.e. <10, 10-14, 15-19, etc.)

# Create the names for the bins
group_names = ['<10', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40+']
age_df = pd.DataFrame(df)

# Cut age and place the scores into bins
age_df["Age Range"] = pd.cut(age_df["Age"], 8, labels=group_names)
               
age_groups = df.groupby(['Age Range'])

#Purchase Count
purchase_count = age_groups.count()["Price"]

#Average Purchase Price
avg_pur_count = age_groups.mean()["Price"]

#Total Purchase Value
total_pur_value = age_groups.sum()["Price"]

#Normalized Totals
norm_total = total_pur_value/purchase_count

pur_analysis = pd.DataFrame({
    
    "Purchase count": purchase_count,
    'Average Purchase Price': avg_pur_count,
    'Total Purchase value': total_pur_value,
    'Normalised Totals': norm_total
})

#printing data
pur_analysis.style.format({"Average Purchase Price": "${:.2f}", "Total Purchase Value":"${:.2f}", "Normalised Totals":"${:.2f}"})
```




<style  type="text/css" >
</style>  
<table id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9" > 
<thead>    <tr> 
        <th class="blank level0" ></th> 
        <th class="col_heading level0 col0" >Average Purchase Price</th> 
        <th class="col_heading level0 col1" >Normalised Totals</th> 
        <th class="col_heading level0 col2" >Purchase count</th> 
        <th class="col_heading level0 col3" >Total Purchase value</th> 
    </tr>    <tr> 
        <th class="index_name level0" >Age Range</th> 
        <th class="blank" ></th> 
        <th class="blank" ></th> 
        <th class="blank" ></th> 
        <th class="blank" ></th> 
    </tr></thead> 
<tbody>    <tr> 
        <th id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9level0_row0" class="row_heading level0 row0" ><10</th> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row0_col0" class="data row0 col0" >$3.01</td> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row0_col1" class="data row0 col1" >$3.01</td> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row0_col2" class="data row0 col2" >41</td> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row0_col3" class="data row0 col3" >123.38</td> 
    </tr>    <tr> 
        <th id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9level0_row1" class="row_heading level0 row1" >10-14</th> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row1_col0" class="data row1 col0" >$2.81</td> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row1_col1" class="data row1 col1" >$2.81</td> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row1_col2" class="data row1 col2" >92</td> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row1_col3" class="data row1 col3" >258.1</td> 
    </tr>    <tr> 
        <th id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9level0_row2" class="row_heading level0 row2" >15-19</th> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row2_col0" class="data row2 col0" >$2.88</td> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row2_col1" class="data row2 col1" >$2.88</td> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row2_col2" class="data row2 col2" >204</td> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row2_col3" class="data row2 col3" >588.4</td> 
    </tr>    <tr> 
        <th id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9level0_row3" class="row_heading level0 row3" >20-24</th> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row3_col0" class="data row3 col0" >$2.96</td> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row3_col1" class="data row3 col1" >$2.96</td> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row3_col2" class="data row3 col2" >275</td> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row3_col3" class="data row3 col3" >814.07</td> 
    </tr>    <tr> 
        <th id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9level0_row4" class="row_heading level0 row4" >25-29</th> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row4_col0" class="data row4 col0" >$2.98</td> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row4_col1" class="data row4 col1" >$2.98</td> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row4_col2" class="data row4 col2" >63</td> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row4_col3" class="data row4 col3" >187.99</td> 
    </tr>    <tr> 
        <th id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9level0_row5" class="row_heading level0 row5" >30-34</th> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row5_col0" class="data row5 col0" >$3.07</td> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row5_col1" class="data row5 col1" >$3.07</td> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row5_col2" class="data row5 col2" >58</td> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row5_col3" class="data row5 col3" >178.26</td> 
    </tr>    <tr> 
        <th id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9level0_row6" class="row_heading level0 row6" >35-39</th> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row6_col0" class="data row6 col0" >$2.90</td> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row6_col1" class="data row6 col1" >$2.90</td> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row6_col2" class="data row6 col2" >44</td> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row6_col3" class="data row6 col3" >127.49</td> 
    </tr>    <tr> 
        <th id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9level0_row7" class="row_heading level0 row7" >40+</th> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row7_col0" class="data row7 col0" >$2.88</td> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row7_col1" class="data row7 col1" >$2.88</td> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row7_col2" class="data row7 col2" >3</td> 
        <td id="T_b0b16198_0fc8_11e8_b367_a8667f361cf9row7_col3" class="data row7 col3" >8.64</td> 
    </tr></tbody> 
</table> 




```python
#Top Spenders

#Identify the the top 5 spenders in the game by total purchase value, then list (in a table):

#SN
SN_groups = df.groupby(['SN'])

#Purchase Count
purchase_count = SN_groups.count()["Price"]

#Average Purchase Price
avg_pur_count = SN_groups.mean()["Price"]

#Total Purchase Value
total_pur_value = SN_groups.sum()["Price"]

pur_analysis = pd.DataFrame({
    
    "Purchase Count": purchase_count,
    'Average Purchase Price': avg_pur_count,
    'Total Purchase Value': total_pur_value,
})

#Sort in descending order to get top 5 spenders
pur_analysis_sorted = pur_analysis.sort_values('Total Purchase Value', ascending=False).head()
pur_analysis_sorted.style.format({"Average Purchase Price": "${:.2f}","Purchase Count": "${:.2f}", "Total Purchase Value": "${:.2f}"})
pur_analysis_sorted.style.format({"Average Purchase Price": "${:.2f}", "Total Purchase Value": "${:.2f}"})
```




<style  type="text/css" >
</style>  
<table id="T_b0ba85f4_0fc8_11e8_b150_a8667f361cf9" > 
<thead>    <tr> 
        <th class="blank level0" ></th> 
        <th class="col_heading level0 col0" >Average Purchase Price</th> 
        <th class="col_heading level0 col1" >Purchase Count</th> 
        <th class="col_heading level0 col2" >Total Purchase Value</th> 
    </tr>    <tr> 
        <th class="index_name level0" >SN</th> 
        <th class="blank" ></th> 
        <th class="blank" ></th> 
        <th class="blank" ></th> 
    </tr></thead> 
<tbody>    <tr> 
        <th id="T_b0ba85f4_0fc8_11e8_b150_a8667f361cf9level0_row0" class="row_heading level0 row0" >Undirrala66</th> 
        <td id="T_b0ba85f4_0fc8_11e8_b150_a8667f361cf9row0_col0" class="data row0 col0" >$3.41</td> 
        <td id="T_b0ba85f4_0fc8_11e8_b150_a8667f361cf9row0_col1" class="data row0 col1" >5</td> 
        <td id="T_b0ba85f4_0fc8_11e8_b150_a8667f361cf9row0_col2" class="data row0 col2" >$17.06</td> 
    </tr>    <tr> 
        <th id="T_b0ba85f4_0fc8_11e8_b150_a8667f361cf9level0_row1" class="row_heading level0 row1" >Saedue76</th> 
        <td id="T_b0ba85f4_0fc8_11e8_b150_a8667f361cf9row1_col0" class="data row1 col0" >$3.39</td> 
        <td id="T_b0ba85f4_0fc8_11e8_b150_a8667f361cf9row1_col1" class="data row1 col1" >4</td> 
        <td id="T_b0ba85f4_0fc8_11e8_b150_a8667f361cf9row1_col2" class="data row1 col2" >$13.56</td> 
    </tr>    <tr> 
        <th id="T_b0ba85f4_0fc8_11e8_b150_a8667f361cf9level0_row2" class="row_heading level0 row2" >Mindimnya67</th> 
        <td id="T_b0ba85f4_0fc8_11e8_b150_a8667f361cf9row2_col0" class="data row2 col0" >$3.18</td> 
        <td id="T_b0ba85f4_0fc8_11e8_b150_a8667f361cf9row2_col1" class="data row2 col1" >4</td> 
        <td id="T_b0ba85f4_0fc8_11e8_b150_a8667f361cf9row2_col2" class="data row2 col2" >$12.74</td> 
    </tr>    <tr> 
        <th id="T_b0ba85f4_0fc8_11e8_b150_a8667f361cf9level0_row3" class="row_heading level0 row3" >Haellysu29</th> 
        <td id="T_b0ba85f4_0fc8_11e8_b150_a8667f361cf9row3_col0" class="data row3 col0" >$4.24</td> 
        <td id="T_b0ba85f4_0fc8_11e8_b150_a8667f361cf9row3_col1" class="data row3 col1" >3</td> 
        <td id="T_b0ba85f4_0fc8_11e8_b150_a8667f361cf9row3_col2" class="data row3 col2" >$12.73</td> 
    </tr>    <tr> 
        <th id="T_b0ba85f4_0fc8_11e8_b150_a8667f361cf9level0_row4" class="row_heading level0 row4" >Eoda93</th> 
        <td id="T_b0ba85f4_0fc8_11e8_b150_a8667f361cf9row4_col0" class="data row4 col0" >$3.86</td> 
        <td id="T_b0ba85f4_0fc8_11e8_b150_a8667f361cf9row4_col1" class="data row4 col1" >3</td> 
        <td id="T_b0ba85f4_0fc8_11e8_b150_a8667f361cf9row4_col2" class="data row4 col2" >$11.58</td> 
    </tr></tbody> 
</table> 




```python
#Most Popular Items

#Merge dataframes to find purchase count, total purchase value for items
#Reset indices to dataframes can be merged on specific elements
merge1 = df.groupby("Item Name").sum().reset_index()
merge2 = df.groupby("Item ID").sum().reset_index()
merge3 = df.groupby("Item Name").count().reset_index()

#merge dataframes
merge_df1 = pd.merge(merge1, merge2, on="Price")
merge_df2 = pd.merge(merge3, merge_df1, on="Item Name")

#start to create final dataframe by manipulating data
merge_df2["Gender"] = (merge_df2["Price_y"]/merge_df2["Item ID"]).round(2)

merge_df2_renamed = merge_df2.rename(columns={"Age": "Purchase Count", "Gender": "Item Price", "Item ID": "null", "Price_y": "Total Purchase Value", "Item ID_y": "Item ID"})

#Including columns needed for the dataframe
clean_df = merge_df2_renamed[["Item ID", "Item Name", "Purchase Count", "Item Price", "Total Purchase Value"]]

df2 = clean_df.set_index(['Item ID','Item Name'])
popular_items_final = prefinal_df.sort_values('Purchase Count', ascending=False).head()
popular_items_final.style.format({"Item Price": "${:.2f}", "Total Purchase Value": "${:.2f}"})
```




<style  type="text/css" >
</style>  
<table id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9" > 
<thead>    <tr> 
        <th class="blank" ></th> 
        <th class="blank level0" ></th> 
        <th class="col_heading level0 col0" >Purchase Count</th> 
        <th class="col_heading level0 col1" >Item Price</th> 
        <th class="col_heading level0 col2" >Total Purchase Value</th> 
    </tr>    <tr> 
        <th class="index_name level0" >Item Name</th> 
        <th class="index_name level1" >Item ID</th> 
        <th class="blank" ></th> 
        <th class="blank" ></th> 
        <th class="blank" ></th> 
    </tr></thead> 
<tbody>    <tr> 
        <th id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9level0_row0" class="row_heading level0 row0" >Arcane Gem</th> 
        <th id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9level1_row0" class="row_heading level1 row0" >84</th> 
        <td id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9row0_col0" class="data row0 col0" >11</td> 
        <td id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9row0_col1" class="data row0 col1" >$2.23</td> 
        <td id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9row0_col2" class="data row0 col2" >$24.53</td> 
    </tr>    <tr> 
        <th id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9level0_row1" class="row_heading level0 row1" >Betrayal, Whisper of Grieving Widows</th> 
        <th id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9level1_row1" class="row_heading level1 row1" >39</th> 
        <td id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9row1_col0" class="data row1 col0" >11</td> 
        <td id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9row1_col1" class="data row1 col1" >$2.35</td> 
        <td id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9row1_col2" class="data row1 col2" >$25.85</td> 
    </tr>    <tr> 
        <th id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9level0_row2" class="row_heading level0 row2" >Trickster</th> 
        <th id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9level1_row2" class="row_heading level1 row2" >31</th> 
        <td id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9row2_col0" class="data row2 col0" >9</td> 
        <td id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9row2_col1" class="data row2 col1" >$2.07</td> 
        <td id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9row2_col2" class="data row2 col2" >$18.63</td> 
    </tr>    <tr> 
        <th id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9level0_row3" class="row_heading level0 row3" >Woeful Adamantite Claymore</th> 
        <th id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9level1_row3" class="row_heading level1 row3" >175</th> 
        <td id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9row3_col0" class="data row3 col0" >9</td> 
        <td id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9row3_col1" class="data row3 col1" >$1.24</td> 
        <td id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9row3_col2" class="data row3 col2" >$11.16</td> 
    </tr>    <tr> 
        <th id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9level0_row4" class="row_heading level0 row4" >Serenity</th> 
        <th id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9level1_row4" class="row_heading level1 row4" >13</th> 
        <td id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9row4_col0" class="data row4 col0" >9</td> 
        <td id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9row4_col1" class="data row4 col1" >$1.49</td> 
        <td id="T_b0c74b34_0fc8_11e8_88bb_a8667f361cf9row4_col2" class="data row4 col2" >$13.41</td> 
    </tr></tbody> 
</table> 




```python
#Most Profitable items
profit_items = prefinal_df.sort_values('Total Purchase Value', ascending=False).head()
profit_items.style.format({"Item Price": "${:.2f}", "Total Purchase Value": "${:.2f}"})
```




<style  type="text/css" >
</style>  
<table id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9" > 
<thead>    <tr> 
        <th class="blank" ></th> 
        <th class="blank level0" ></th> 
        <th class="col_heading level0 col0" >Purchase Count</th> 
        <th class="col_heading level0 col1" >Item Price</th> 
        <th class="col_heading level0 col2" >Total Purchase Value</th> 
    </tr>    <tr> 
        <th class="index_name level0" >Item Name</th> 
        <th class="index_name level1" >Item ID</th> 
        <th class="blank" ></th> 
        <th class="blank" ></th> 
        <th class="blank" ></th> 
    </tr></thead> 
<tbody>    <tr> 
        <th id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9level0_row0" class="row_heading level0 row0" >Retribution Axe</th> 
        <th id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9level1_row0" class="row_heading level1 row0" >34</th> 
        <td id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9row0_col0" class="data row0 col0" >9</td> 
        <td id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9row0_col1" class="data row0 col1" >$4.14</td> 
        <td id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9row0_col2" class="data row0 col2" >$37.26</td> 
    </tr>    <tr> 
        <th id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9level0_row1" class="row_heading level0 row1" >Spectral Diamond Doomblade</th> 
        <th id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9level1_row1" class="row_heading level1 row1" >115</th> 
        <td id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9row1_col0" class="data row1 col0" >7</td> 
        <td id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9row1_col1" class="data row1 col1" >$4.25</td> 
        <td id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9row1_col2" class="data row1 col2" >$29.75</td> 
    </tr>    <tr> 
        <th id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9level0_row2" class="row_heading level0 row2" >Orenmir</th> 
        <th id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9level1_row2" class="row_heading level1 row2" >32</th> 
        <td id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9row2_col0" class="data row2 col0" >6</td> 
        <td id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9row2_col1" class="data row2 col1" >$4.95</td> 
        <td id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9row2_col2" class="data row2 col2" >$29.70</td> 
    </tr>    <tr> 
        <th id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9level0_row3" class="row_heading level0 row3" >Singed Scalpel</th> 
        <th id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9level1_row3" class="row_heading level1 row3" >103</th> 
        <td id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9row3_col0" class="data row3 col0" >6</td> 
        <td id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9row3_col1" class="data row3 col1" >$4.87</td> 
        <td id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9row3_col2" class="data row3 col2" >$29.22</td> 
    </tr>    <tr> 
        <th id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9level0_row4" class="row_heading level0 row4" >Splitter, Foe Of Subtlety</th> 
        <th id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9level1_row4" class="row_heading level1 row4" >107</th> 
        <td id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9row4_col0" class="data row4 col0" >8</td> 
        <td id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9row4_col1" class="data row4 col1" >$3.61</td> 
        <td id="T_b0c9f7a8_0fc8_11e8_a6bc_a8667f361cf9row4_col2" class="data row4 col2" >$28.88</td> 
    </tr></tbody> 
</table> 


