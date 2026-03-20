create table Departments (
	id serial primary key,
	name text
);

create table Projects (
	id serial primary key,
	name text
);

create table Employees (
	id serial primary key,
	name text,
	department int references Departments(id) ON DELETE CASCADE
);

create table Skills (
	id serial primary key,
	name text,
	description text
);

create table SkillEmployeeBridge (
	id serial primary key,
	employee int references Employees(id) ON DELETE CASCADE,
	skill int references Skills(id) ON DELETE CASCADE
);

create table ProjectEmployeeBridge (
	id serial primary key,
	employee int references Employees(id) ON DELETE CASCADE,
	project int references Projects(id) ON DELETE CASCADE
);


insert into Skills(name, description) values
('name1', 'desc1'),
('name2', 'desc2'),
('name3', 'desc3'),
('name4', 'desc4');

insert into Departments(name) values 
('depart1'),
('depart2'),
('depart3'),
('depart4');

insert into Employees(name, department) values
('name1', 1),
('name2', 2),
('name3', 3),
('name4', 4);

insert into Projects(name) values
('name1'),
('name2'),
('name3'),
('name4');

insert into SkillEmployeeBridge(employee, skill) values
(1, 1),
(2, 2),
(3, 3),
(4, 4);

insert into ProjectEmployeeBridge(employee, project) values
(1, 3),
(2, 4),
(3, 2),
(4, 1);

select * from ProjectEmployeeBridge where id = 1 and employee=1

select projects.id, projects.name from Projects join ProjectEmployeeBridge on Projects.id = ProjectEmployeeBridge.project where ProjectEmployeeBridge.employee = 1

select Skills.id, Skills.name from Skills join SkillEmployeeBridge on Skills.id = SkillEmployeeBridge.skill where SkillEmployeeBridge.employee = 1