SET NAMES utf8mb4;
-- class table
CREATE TABLE class (
id int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, 
name varchar(225) NOT NULL, 
begins_date DATE NOT NULL, 
ends_date DATE NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- student table
CREATE TABLE student (
id int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, 
name varchar(225) NOT NULL, 
email varchar(225) NOT NULL, 
phone varchar(225) NOT NULL, 
class_id int(10) unsigned NOT NULL,
CONSTRAINT fk_class FOREIGN KEY(class_id) REFERENCES class(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- create index on name column student table
ALTER TABLE student ADD INDEX (name);

-- add a column on class table
ALTER TABLE class
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished') NOT NULL;
