create table Usuario(
	cpf varchar(11) primary key,
	nome varchar(30) not null,
	senha int not null,
	email varchar(20) not null
)

create table Cursos(
	imagem image not null,
	nomeCurso varchar(20) not null,
	descricao varchar not null,
	qtdAulas int not null,
	cargaHoraria int not null,
	qtdExercicio int not null,
)

insert into Usuario values('46816198840', 'Eloisa', 123456789, 'elosapdeo@gmail.com')

select * from Usuario