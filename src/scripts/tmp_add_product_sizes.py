import csv

with open('products.csv') as products_csv:
    with open('product_sizes.csv') as product_sizes_csv:
        with open('new_products.csv', 'wb') as new_products_csv:
            new_products_writer = csv.writer(new_products_csv)
            products_csv_reader = csv.reader(products_csv)
            sizes_csv_reader = csv.reader(product_sizes_csv)


            product_sizes = {}
            for row in sizes_csv_reader:
                [product_name, product_id, sizes] = row
                product_name = product_name.strip()
                product_sizes[product_name] = {'sizes': sizes, 'product_id': product_id}

            count = 0
            for row in products_csv_reader:
                count += 1

                # Hack for english names with commas in it
                if len(row) > 3:
                    print row
                    name_en = ''.join(row[2:])
                    row[2] = name_en
                    row = row[:3]

                [struct_id, chinese_name, name] = row
                name = name.strip()
                if product_sizes.get(name) is None:
                    print "failed to find:", name
                product_id = product_sizes.get(name, {}).get('product_id', '')
                sizes = product_sizes.get(name, {}).get('sizes', '')

                new_products_writer.writerow([struct_id, product_id, chinese_name, name, sizes])
                print count
