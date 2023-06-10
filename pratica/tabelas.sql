create table Usuario(
	cpf varchar(11) primary key,
	nome varchar(30) not null,
	senha int not null,
	email varchar(20) not null
)

create table Cursos(
	id int identity(1,1) primary key, 
	imagem varchar(100) not null,
	nomeCurso varchar(50) not null,
	descricao varchar(1000) not null,
	qtdAulas int not null,
	cargaHoraria int not null,
	qtdExercicio int not null,
)

update Cursos set nomeCurso = 'Tecnicas de venda' where id = 3
select * from Cursos
drop table Cursos