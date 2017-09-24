import csv
import json
import os
import re

categories_to_product_categories = {
    'A': ['6', '7'],
    'B': ['8', '9', '10', '11'],
    'C': ['12', '13', '14', '15', '16', '17'],
    'D': ['18'],
    'E': ['19', '20', '21', '22', '23'],
}

def find_images_for_product(product_key):
    images = []
    for root, dirs, files in os.walk('.'):
        root = '/img' + root[1:]
        file_set = [fn for fn in files if '.jpg' in fn and fn[0] != '_']
        product_images = [fn for fn in file_set if re.compile(product_key + '(-.)?\.jpg').match(fn)]
        if product_images:
            for image_name in product_images:
                images.append(root + '/' + image_name)

    return images

def process():
    with open('products.csv') as products_csv:
        products_json = {}
        for key in categories_to_product_categories:
            products_json[key] = {}

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
                category = [key for key in categories_to_product_categories
                            if product_category in categories_to_product_categories[key]][0]
                key1 = category
                key2 = key1 + '-' + product_category
                products_json[key1][key2] = {
                    "metadata": {
                        "name_en": name_en,
                        "name_cn": name_cn
                    }
                }
            elif len(identifier_parts) == 2:
                # This relies on the fact that the product category has been
                # constructed already.
                [product_category, product_index] = identifier_parts
                category = [key for key in categories_to_product_categories
                            if product_category in categories_to_product_categories[key]][0]
                key1 = category
                key2 = key1 + '-' + product_category
                key3 = key2 + '-' + product_index
                products_json[key1][key2][key3] = {
                    "metadata": {
                        "name_en": name_en,
                        "name_cn": name_cn,
                        "images": find_images_for_product(key3)
                    }
                }
            else:
                raise Exception("Badly formatted identifier:", identifier)

        print "writing to products.json"
        with open('products.json', 'w') as products_json_file:
            products_json_file.write(json.dumps(products_json, indent=4, sort_keys=True))
        print "done"

process()
