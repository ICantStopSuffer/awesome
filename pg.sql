create table Departments (
	id serial primary key,
	name text
);

create table Projects (
	id serial primary key,
	name text
);

create table Employees (
	id serial primary key
	name text,
	department int references Departments(id)
);

create table Skills (
	id serial primary key
	name text,
	description text,
)

create table SkillEmployeeBridge (
	id serial primary key,
	employee int references Employees(id),
	skill int references Skills(id)
);

create table ProjectEmployeeBridge (
	id serial primary key,
	employee int references Employees(id),
	project int references Projects(id)
);

