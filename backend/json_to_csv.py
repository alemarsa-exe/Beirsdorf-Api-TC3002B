import csv


def json_to_csv(json_data, csv_file):
    # Extracting keys from the JSON data
    fieldnames = list(json_data.keys())

    # Writing to CSV with ';' as delimiter
    with open(csv_file, 'w', newline='') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames, delimiter=';')

        # Writing header
        writer.writeheader()

        # Writing row
        writer.writerow(json_data)

