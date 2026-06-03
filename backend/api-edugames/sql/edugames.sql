create database edugames_db;
use edugames_db;

create table users(
    id int primary key auto_increment,
    name varchar(50) not null,
    email varchar(50) not null unique,
    password varchar(8) not null
);