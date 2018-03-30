
USE sakila;

-- 1a. Display the first and last names of all actors from the table actor.
SELECT first_name, last_name
FROM actor;
 
-- 1b. Display the first and last name of each actor in a single column in upper case letters. Name the column Actor Name.
SELECT
 CONCAT (
 UPPER (first_name),
 UPPER (last_name)
 ) as Actor_Name
FROM actor;

-- 2a. You need to find the ID number, first name, and last name of an actor, of whom you know only the first name, "Joe." 
-- What is one query would you use to obtain this information?

SELECT actor_id,first_name,last_name
FROM actor
WHERE actor. first_name = 'Joe';

-- 2b. Find all actors whose last name contain the letters GEN:

SELECT actor_id, first_name, last_name
FROM actor
WHERE actor.last_name LIKE  '%GEN%';

-- 2c. Find all actors whose last names contain the letters LI. This time, order the rows by last name and first name, in that order:

SELECT actor_id, first_name, last_name
FROM actor
WHERE actor.last_name LIKE '%LI%'
ORDER BY last_name,first_name;

-- 2d. Using IN, display the country_id and country columns of the following countries: Afghanistan, Bangladesh, and China:

-- SELECT * FROM country

SELECT country_id, country
FROM country
WHERE country IN ('Afghanistan', 'Bangladesh', 'China');

-- 3a. Add a middle_name column to the table actor. Position it between first_name and last_name. Hint: you will need to specify the data type.

ALTER TABLE actor
ADD column middle_name VARCHAR(50) AFTER first_name;

SELECT* FROM actor;

-- 3b. You realize that some of these actors have tremendously long last names. Change the data type of the middle_name column to blobs.
ALTER TABLE actor 
MODIFY COLUMN middle_name BLOB;

-- SELECT* FROM actor;
-- 3c. Now delete the middle_name column.
ALTER TABLE actor 
DROP COLUMN middle_name;

-- SELECT* FROM actor;

-- 4a. List the last names of actors, as well as how many actors have that last name.
SELECT last_name , count(*) AS 'Count'
FROM actor
GROUP BY last_name;

-- 4b. List last names of actors and the number of actors who have that last name, but only for names that are shared by at least two actors
    
SELECT last_name, Count(*) AS 'Count'
FROM actor
GROUP BY last_name
HAVING Count > 2;

-- 4c. Oh, no! The actor HARPO WILLIAMS was accidentally entered in the actor table as GROUCHO WILLIAMS, the name of Harpo's second cousin's husband's yoga teacher. Write a query to fix the record.
UPDATE actor 
SET first_name= 'HARPO'
WHERE first_name ='GROUCHO' AND last_name ='WILLIAMS';

-- SELECT* FROM actor;

-- 4d. Perhaps we were too hasty in changing GROUCHO to HARPO. It turns out that GROUCHO was the correct name after all! In a single query, if the first name of the actor is currently HARPO, change it to GROUCHO. 
-- Otherwise, change the first name to MUCHO GROUCHO, as that is exactly what the actor will be with the grievous error. BE CAREFUL NOT TO CHANGE THE FIRST NAME OF EVERY ACTOR TO MUCHO GROUCHO, HOWEVER! (Hint: update the record using a unique identifier.)

UPDATE actor
 SET first_name = 
 CASE 
 WHEN first_name = 'HARPO' 
 THEN 'GROUCHO'
 ELSE 'MUCHO GROUCHO'
 END
 WHERE actor_id = 172;

-- SELECT* FROM actor;

--  5a. You cannot locate the schema of the address table. Which query would you use to re-create it?

SHOW CREATE TABLE sakila.address;

CREATE TABLE IF NOT EXISTS `sakila`.`address` (
  `address_id` SMALLINT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(50) NOT NULL,
  `address2` VARCHAR(50) NULL DEFAULT NULL,
  `district` VARCHAR(20) NOT NULL,
  `city_id` SMALLINT(5) UNSIGNED NOT NULL,
  `postal_code` VARCHAR(10) NULL DEFAULT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `location` GEOMETRY NOT NULL,
  `last_update` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`address_id`),
  INDEX `idx_fk_city_id` (`city_id` ASC),
  SPATIAL INDEX `idx_location` (`location` ASC),
  CONSTRAINT `fk_address_city`
    FOREIGN KEY (`city_id`)
    REFERENCES `sakila`.`city` (`city_id`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 606
DEFAULT CHARACTER SET = utf8

-- 6a. Use JOIN to display the first and last names, as well as the address, of each staff member. Use the tables staff and address:

-- SELECT * FROM address;
-- SELECT* FROM staff;

SELECT staff.first_name, staff.last_name, address.address
FROM staff
INNER JOIN address ON staff.address_id=address.address_id;

-- 6b. Use JOIN to display the total amount rung up by each staff member in August of 2005. Use tables staff and payment.


-- SELECT * FROM payment;
-- SELECT * FROM staff;


SELECT first_name, last_name, SUM(amount)
FROM staff
INNER JOIN payment
ON staff.staff_id = payment.staff_id
GROUP BY payment.staff_id
ORDER BY last_name ASC;

-- 6c. List each film and the number of actors who are listed for that film. Use tables film_actor and film. Use inner join.

SELECT * FROM film_actor;
SELECT * FROM film;

SELECT title, count(actor_id)
FROM film_actor
INNER JOIN film
ON film.film_id = film_actor.film_id
GROUP BY title;

-- 6d. How many copies of the film Hunchback Impossible exist in the inventory system?

SELECT title, COUNT(inventory_id)
FROM film f
INNER JOIN inventory i
ON f.film_id = i.film_id
WHERE title = 'Hunchback Impossible';

-- 6e. Using the tables payment and customer and the JOIN command, list the total paid by each customer. List the customers alphabetically by last name:

SELECT * FROM payment;
SELECT * FROM customer;


SELECT first_name ,last_name, SUM(amount)
FROM customer c
INNER JOIN payment p
ON c.customer_id = p.customer_id
GROUP BY p.customer_id
ORDER BY last_name ASC;

-- 7a. The music of Queen and Kris Kristofferson have seen an unlikely resurgence. As an unintended consequence, films starting with the letters K and Q have also soared in popularity. 
-- Use subqueries to display the titles of movies starting with the letters K and Q whose language is English.

SELECT title
FROM film
WHERE (title LIKE 'K%' OR title LIKE 'Q%') 
AND language_id=
	(SELECT language_id
    FROM language
    WHERE name= 'English');


-- 7b. Use subqueries to display all actors who appear in the film Alone Trip.

SELECT first_name, last_name
FROM actor
WHERE actor_id
	IN (SELECT actor_id FROM film_actor WHERE film_id 
		IN (SELECT film_id from film where title='ALONE TRIP'));

-- 7c. You want to run an email marketing campaign in Canada, for which you will need the names and email addresses of all Canadian customers. Use joins to retrieve this information.

SELECT country, last_name, first_name, email
FROM country c
LEFT JOIN customer cu
ON c.country_id = cu.customer_id
WHERE country = 'Canada';

-- 7d. Sales have been lagging among young families, and you wish to target all family movies for a promotion. Identify all movies categorized as famiy films.

SELECT * FROM film_list;

SELECT title, category
FROM film_list
WHERE category = 'Family';

-- 7e. Display the most frequently rented movies in descending order.

SELECT * FROM rental;