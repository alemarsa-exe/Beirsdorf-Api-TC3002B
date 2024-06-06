import csv
import json


def csv_to_json(csv_file, json_file):
    # Initialize an empty list to store the rows
    data = []

    # Open the CSV file and read its contents
    with open(csv_file, 'r') as csvfile:
        # Create a CSV reader object
        csv_reader = csv.DictReader(csvfile, delimiter=';')

        # Iterate over each row in the CSV file
        for row in csv_reader:
            # Append each row to the data list
            data.append(row)

    # Open the JSON file and write the data to it
    with open(json_file, 'w') as jsonfile:
        # Write the data list to the JSON file
        json.dump(data, jsonfile, indent=4)