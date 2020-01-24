insert into products
(img, name, price)
values
($1, $2, $3)

returning *;