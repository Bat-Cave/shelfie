update products
set name = $3, price = $4, img = $2
where id = $1;