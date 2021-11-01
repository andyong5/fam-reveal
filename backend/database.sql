create database pledges_list;

create table pledges(
    id serial primary key,
    name varchar(30),
    family varchar(10)
);