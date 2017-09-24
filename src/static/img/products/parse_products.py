import csv
import json

with open('products.csv') as products_csv:
    products_json = {}

    csv_reader = csv.reader(products_csv)
    for row in csv_reader:
        # Hack to make sure each CSV has three entries,
        # because some of the english names have commas.
        if len(row) > 3:
            name_en = ','.join(row[3:])
            row[3] = name_en
            row = row[:3]
        [identifier, name_cn, name_en] = row

        identifier_parts = identifier.split('-')
        if len(identifier_parts) == 1:
            [product_category] = identifier_parts
            products_json[product_category] = {
                "metadata": {
                    "name_en": name_en,
                    "name_cn": name_cn
                }
            }
        elif len(identifier_parts) == 2:
            # This relies on the fact that the product category has been
            # constructed already.
            [product_category, product_index] = identifier_parts
            products_json[product_category][product_category + '-' + product_index] = {
                "metadata": {
                    "name_en": name_en,
                    "name_cn": name_cn
                }
            }
        else:
            raise Exception("Badly formatted identifier:", identifier)

    print "writing to products.json"
    with open('products.json', 'w') as products_json_file:
        products_json_file.write(json.dumps(products_json, indent=4, sort_keys=True))
    print "done"
