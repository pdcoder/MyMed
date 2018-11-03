drop table if exists `Users`;
create table `Users`(
`id` int(100) primary key auto_increment,
`email` varchar(100),
`password` varchar(100)
);