const varinhas = [
    {
        id: 1,
        descricao: 'A varinha do Harry Potter é feita de azevinho e tem uma pena de fênix em seu núcleo. A mesma fênix produziu a pena utilizada para compor o núcleo da varinha de Lorde Voldemort, tornando as varinhas "irmãs".',
        origem: 'A pena que equipa o núcleo da varinha de Harry vem de Fawkes, a ave de Dumbledore, e apenas mais uma varinha compartilha do mesmo núcleo: a de Tom Riddle, ou Voldemort.',
        imagem: 'https://i.pinimg.com/564x/2d/eb/96/2deb96462f993a40e38d44b0dd195638.jpg'
    },
    {
        id: 2,
        descricao: 'A Varinha de Hermione Granger é uma varinha feita de videira, com 27,305cm e núcleo de fibra de coração de dragão.',
        origem: 'Essa é a varinha que Hermione Granger compra no Olivaras para seu primeiro ano em Hogwarts, mas os sequestradores a confiscam em Harry Potter e as Relíquias da Morte.',
        imagem: 'https://i.pinimg.com/564x/dd/ee/62/ddee6239f2620ecb7c80f1279477866a.jpg'
    },
    {
        id: 3,
        descricao: 'Comprimento. A primeira varinha de Ronald Weasley foi uma varinha de 12" (30,48 cm) tempo, feita de freixo, e tinha um núcleo de pelo de unicórnio.',
        origem: 'Ela originalmente pertencia a seu irmão mais velho Carlos Weasley.',
        imagem: 'https://i.pinimg.com/564x/0a/e9/5a/0ae95ae9b1da17370a80ca661fc51c6e.jpg'
    },
    {
        id: 4,
        descricao: 'A Varinha de Draco Malfoy media 25 centímetros de comprimento, era feita de madeira de pilriteiro e possuía como núcleo pelo de unicórnio. A varinha foi fabricada por Garrick Olivaras, que a descreveu como "razoavelmente flexível".',
        origem: 'A varinha original de Draco Malfoy foi feita por Garrick Olivaras, feita de madeira de teixo com um núcleo de pelo de coração de dragão.',
        imagem: 'https://i.pinimg.com/564x/6f/1e/30/6f1e300a2b58304ebbaab47232605ee9.jpg'
    },
    {
        id: 5,
        descricao: 'Rígida, adequado para Transfiguração. A varinha de Minerva McGonagall é feita de Abeto e corda de coração de dragão com 36 cm, boa para Transfiguração.',
        origem: 'Minerva comprou esta varinha em 1947 no Olivaras pouco tempo antes de embarcar para seu primeiro ano em Hogwarts.',
        imagem: 'https://i.pinimg.com/564x/8f/60/7b/8f607be6be7b6cbfde38c465828f3a0e.jpg'
    },
    {
        id: 6,
        descricao: 'Mede 30 cm de comprimento, era feita de frei o e continha um único pelo de unicórnio.',
        origem: 'A varinha foi feita por Garrick Olivaras que a descreveu como “agradavelmente flexível”!durante a cerimônia de pesagem das varinhas para o Torneio Tribuxo.',
        imagem: 'https://i.pinimg.com/564x/7a/23/a2/7a23a29ad9e1ee9831cad86e5a946871.jpg'
    },
    {
        id: 7,
        descricao: 'A varinha do Cho Chang, do Harry Potter. Feita de resina e com uma caixa super linda, além de uma seda interna, é ideal para deixar de decoração, exposto em seu cantinho favorito.',
        origem: 'Embora a história da varinha de Cho Chang não tenha sido detalhada, podemos presumir que ela adquiriu sua varinha antes de frequentar a Escola de Magia e Bruxaria de Hogwarts.',
        imagem: 'https://i.pinimg.com/564x/0d/67/83/0d67834c066dd48fbd2f8cf28051a6dc.jpg'
    },
    {
        id: 8,
        descricao: 'A varinha é descrita como sendo feita de madeira de sabugueiro e possui um núcleo de pelo de cauda de coração de dragão.',
        origem: 'Na série Harry Potter, a origem da varinha de Severo Snape não é explicitamente mencionada nos livros ou nos filmes.',
        imagem: 'https://i.pinimg.com/564x/61/4e/b7/614eb73081b0daf41538f1b86e193658.jpg'
    },
    {
        id: 9,
        descricao: 'A varinha de Rúbeo Hagrid é uma varinha de 40,64 cm, meio mole feita de carvalho e de núcleo desconhecido. Esta varinha é a mais longa já registrada, com exceção da Varinha de Lúcio Malfoy, que mede 45,72 cm de comprimento.',
        origem: 'Esta varinha foi tirada de Hagrid quando ele foi expulso da Escola de Magia e Bruxaria de Hogwarts em seu terceiro ano, e reparada ou substituída em algum momento antes que ele pegasse Harry no seu décimo primeiro aniversário.',
        imagem: 'https://i.pinimg.com/564x/db/a9/3f/dba93f3c3775170418308a6e43208eeb.jpg'
    },
    {
        id: 10,
        descricao: 'A Varinha de Luna Lovegood era de comprimento, madeira, material e núcleo desconhecidos.',
        origem: 'Luna teve esta varinha pelo menos desde no início do Ano letivo 1995-1996, seu quarto ano na Escola de Magia e Bruxaria de Hogwarts.',
        imagem: 'https://i.pinimg.com/564x/a6/c3/ec/a6c3ecd7fe8fac7c257de1aa8778e866.jpg'
    },
    {
        id : 11,
        descricao: 'A varinha de Neville Longbottom feita de cerejeira, 33,02cm, tendo como núcleo de pelo de unicórnio.',
        origem: 'Neville comprou esta varinha em 1996 após sua primeira varinha ser quebrada por Antonin Dolohov durante a Batalha do Departamento de Mistérios.',
        imagem: 'https://i.pinimg.com/564x/4a/85/1e/4a851e3500a0e3d869022bf51c477a7f.jpg'
    },
    {
        id: 12,
        descricao: 'A varinha de Ginevra Weasley era feita de madeira de teixo e possuía um comprimento e núcleo desconhecidos.',
        origem: 'Assim como a maioria dos bruxos britânicos, Gina provavelmente comprou sua varinha aos onze anos na Olivaras Varinhas antes de iniciar sua educação em Hogwarts.',
        imagem: 'https://i.pinimg.com/564x/66/a3/0f/66a30f7d705f9fdba5bd8fa5e0ea8f28.jpg'
    },
    {
        id: 13,
        descricao: 'A varinha de Sirius Black é de comprimento, madeira e núcleo desconhecidos. A varinha foi fabricada pela Garrick Olivaras. ',
        origem: ' Sirius comprou sua varinha com a idade de onze anos na loja de varinhas Olivaras antes de começar na Escola de Magia e Bruxaria de Hogwarts em 1971.',
        imagem: 'https://i.pinimg.com/564x/75/7a/e3/757ae3cfcdd4332d4fed2200fbf497ab.jpg '
    },
    {
        id: 14,
        descricao: 'A varinha de Remus Lupin é feita de resina e com uma caixa super linda, além de uma seda interna, é ideal para deixar de decoração, exposto em seu cantinho favorito.',
        origem: 'Não é especificada em livros ou filmes, sendo desconhecida sua origem.',
        imagem: 'https://i.pinimg.com/564x/64/a8/b0/64a8b0e280596898910057b2bed70f54.jpg '
    },
    {
        id: 15,
        descricao: 'A varinha de Arthur Weasley tem sua descrição desconhecida.',
        origem: 'A varinha de Arthur Weasley tem sua origem desconhecida.',
        imagem: 'https://i.pinimg.com/564x/34/ce/9a/34ce9ae424018800d69be659191e130c.jpg '
    },
    {
        id: 16,
        descricao: 'A varinha de Belatriz Lestrange era uma varinha feita de nogueira, 32,385cm, inflexível e tinha como núcleo de corda de coração de dragão.',
        origem: 'Não é especificada em livros ou filmes, sendo desconhecida sua origem.',
        imagem: 'https://i.pinimg.com/564x/5f/b8/48/5fb848b841d1beb62cd088d2a160365a.jpg ',
    },
    {

    }


];