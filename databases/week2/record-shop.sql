CREATE SCHEMA record_shop;
SET NAMES utf8mb4;
USE record_shop;

CREATE TABLE band (
id int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, 
name varchar(225) NOT NULL, 
country varchar(225) NOT NULL, 
found_date DATE NOT NULL,
website varchar(225) NULL DEFAULT NULL, 
total_album int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE stock_status (
  id int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE album (
id int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, 
name varchar(225) NOT NULL, 
release_date DATE NOT NULL,
total_track int(10) NOT NULL,
band_id int(10) unsigned NOT NULL,
CONSTRAINT fk_band FOREIGN KEY(band_id) REFERENCES band(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE band_album (
  band_id int(10) unsigned NOT NULL,
  album_id int(10) unsigned NOT NULL,
  stock_status_id int(10) unsigned NOT NULL,
  PRIMARY KEY(band_id, album_id, stock_status_id),
  CONSTRAINT fk_band_album_band FOREIGN KEY (band_id) REFERENCES band(id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_band_album_album FOREIGN KEY (album_id) REFERENCES album(id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_band_album_stock_status FOREIGN KEY (stock_status_id) REFERENCES stock_status(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

