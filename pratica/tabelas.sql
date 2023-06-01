create table Usuario(
	cpf varchar(11) primary key,
	nome varchar(30) not null,
	senha int not null,
	email varchar(20) not null
)

create table Cursos(
	id int identity(0,1) primary key, 
	imagem varchar(100) not null,
	nomeCurso varchar(50) not null,
	descricao varchar(1000) not null,
	qtdAulas int not null,
	cargaHoraria int not null,
	qtdExercicio int not null,
)
drop table Cursos
insert into Cursos values('../assets/ImagensCursos/analisefinanceira.jpg', 'Analise financeira', 'Também conhecida como análise econômica, consiste no estudo sobre a capacidade da empresa em cumprir seu objetivo financeiro – ou seja, gerar lucro. Por meio da análise financeira é possível monitorar os resultados do negócio, além de prever o desenvolvimento ou não da organização. Com base nessa análise, os empreendedores podem identificar possíveis erros e até mesmo direcionar investimentos de forma mais assertiva e eficiente.', 8, 12, 20)
insert into Cursos values('../assets/ImagensCursos/planonegocio.jpg', 'Plano de negócios', 'Aprenda a fazerum plano de negocios, documento que descreve por escrito os objetivos de um negócio e quais passos devem ser dados para que esses objetivos sejam alcançados, diminuindo os riscos e as incertezas. Um plano de negócio permite identificar e restringir seus erros no papel, ao invés de cometê-los no mercado.', 12, 15, 36)
insert into Cursos values('../assets/ImagensCursos/tecnicasvendas', 'Curso de tecnicas de venda', '',)