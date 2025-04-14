DROP DATABASE IF EXISTS blog_db;
CREATE DATABASE blog_db;
USE blog_db;

CREATE TABLE user(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(50),
    email VARCHAR(30),
    password VARCHAR(20),
    phone_no VARCHAR(10),
    created_time DATETIME default CURRENT_TIMESTAMP
);

CREATE TABLE categories(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30),
    description VARCHAR(50)
);

CREATE TABLE blogs(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(20),
    contents VARCHAR(500),
    created_time DATETIME default CURRENT_TIMESTAMP,
    user_id INTEGER REFERENCES user(id),
    category_id INTEGER REFERENCES categories(id)
);

