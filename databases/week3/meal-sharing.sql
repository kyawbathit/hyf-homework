CREATE database mealshare;
USE mealshare;
CREATE TABLE meal (
	id int(10) unsigned NOT NULL auto_increment,
    title varchar(225) NOT NULL,
    description text NOT NULL,
    location varchar(225) NOT NULL,
    when_to_searve datetime NOT NULL,
    max_reservation int(10) NOT NULL,
    price decimal NOT NULL,
    created_date date NOT NULL,
	PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE review(
	id int(10) unsigned NOT NULL auto_increment,
    title varchar(225) NOT NULL,
    description text NULL,
    meal_id int(10) unsigned NOT NULL,
    star int(10) NULL,
    created_date date NOT NULL,
	PRIMARY KEY (id),
    CONSTRAINT fk_meal FOREIGN KEY (meal_id) REFERENCES meal(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE reservation(
	id int(10) unsigned NOT NULL auto_increment,
    num_of_guests int(10) NOT NULL,
    meal_id int(10) unsigned NOT NULL,
    created_date date NOT NULL,
    contact_phone varchar(225) NULL,
    contact_name varchar(225) NOT NULL,
    contact_email varchar(225) NULL,
	PRIMARY KEY (id),
    CONSTRAINT fk_meal_reserved FOREIGN KEY (meal_id) REFERENCES meal(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SELECT * FROM meal;

Alter table meal 
RENAME COLUMN when_to_searve TO when_to_serve;

insert into meal(id, title, description, location, when_to_serve, max_reservation, price, created_date)
value (1,'Vegan-pizza', 'Pizza with vegitable', 'Holbaek', '2021-01-28', 5, 75, '2021-01-20');
insert into meal(id, title, description, location, when_to_serve, max_reservation, price, created_date)
value 
(2,'Vegan burger', 'Burger with vegitable', 'Holbaek', '2021-01-29', 5, 65, '2021-01-20'),
(3,'Vegan spagetti', 'Spagetti with vegitable', 'Roskilde', '2021-01-30', 4, 70, '2021-01-20'),
(4,'Mushroom soup', 'Soup with mashroom and cream', 'CPH', '2021-01-27', 2, 65, '2021-01-20'),
(5,'beef steak', 'Steak with T-bone beef', 'CPH', '2021-01-26', 3, 95, '2021-01-20');



SELECT * FROM meal
WHERE id = 5;

UPDATE meal
SET location = 'CPH Kitchen'
WHERE id = 5;

DELETE FROM meal
where id = 3;

describe reservation;
SELECT * FROM reservation;
insert into reservation (id, num_of_guests, meal_id, created_date, contact_phone, contact_name, contact_email)
value 
(1, 3, 5, '2021-01-29', '2507774191', 'Kjaw', 'kjaw@gmail.com'),
(3, 5, 4, '2021-01-27', '2507770001', 'Zjaw', '');

insert into reservation (id, num_of_guests, meal_id, created_date, contact_phone, contact_name, contact_email)
value 
(2, 3, 5, '2021-01-29', '2507774191', 'Kjaw', 'kjaw@gmail.com');

select * from reservation;
insert into reservation (
	id, 
	num_of_guests, 
	meal_id, 
	created_date, 
	contact_phone, 
	contact_name, 
	contact_email)
	value (
    4, 
    3, 
    5, 
    '2021-01-29', 
    '2507774191', 
    'Cjaw', 
    'cjaw@gmail.com');
    
SELECT contact_email FROM reservation
WHERE id = 1;  

UPDATE reservation
SET contact_email = 'kyawbathit@gmail.com'
Where id = 1; 

DELETE FROM reservation
where id = 4;

insert into review (id, title, description, meal_id, star, created_date)
value 
(1, 'Great', 'Very positive', 3, 5, '2021-02-02'),
(2, 'Good', 'Positive', 1, 4, '2021-02-03'),
(3, 'Fair', 'Fairly positive', 4, 3, '2021-02-04'),
(4, 'Bad', 'Negative', 5, 1, '2021-02-02');

select * from review;

UPDATE review 
SET description = 'Very delicious'
Where id = 1;

UPDATE review 
SET description = 'Delicious'
Where id = 2;

UPDATE review 
SET description = 'Not bad'
Where id = 3;

UPDATE review 
SET description = 'Not so ok'
Where id = 4;

DELETE FROM review
where id = 4;

SELECT * FROM meal
WHERE price < 80;

SELECT title, description, location, max_reservation, num_of_guests FROM meal
JOIN reservation r ON r.meal_id = meal.id
WHERE max_reservation > num_of_guests;

SELECT title, description, location FROM meal
WHERE title LIKE 'vegan%';

SELECT title, description, location FROM meal
WHERE created_date BETWEEN '2021-01-20' AND '2021-01-21';

SELECT * FROM meal
LIMIT 3;

SELECT meal.title, meal.description FROM meal
JOIN review ON meal.id = review.meal_id
WHERE review.star > 3;

SELECT * FROM reservation
WHERE meal_id = 4
ORDER BY created_date DESC;

SELECT meal.title, meal.description, AVG(review.star) AS average_rating FROM meal
JOIN review ON meal.id = review.meal_id
GROUP BY meal.id
ORDER BY review.star DESC;







