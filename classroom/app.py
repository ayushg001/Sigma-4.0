import pandas as pd

file_path = 'mobile_data.csv'
# Reading the CSV file
df = pd.read_csv(file_path)  # Replace 'data.csv' with your actual file name

# Displaying the first few rows
print(df.head())  # head() shows the first 5 rows by default
