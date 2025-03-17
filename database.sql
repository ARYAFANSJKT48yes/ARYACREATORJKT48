CREATE DATABASE IF NOT EXISTS aryawebsite_db;
USE aryawebsite_db;

CREATE TABLE IF NOT EXISTS visitors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ip_address VARCHAR(50),
    device TEXT,
    visit_time DATETIME
);
