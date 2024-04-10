CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);


INSERT INTO restaurants (id, name, location, price_range) values(123, 'KFC', 'London', 3);

INSERT INTO restaurants (name, location, price_range) values('Wendys', 'London', 1);