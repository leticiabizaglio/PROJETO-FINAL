const varinhas = [
    {
        id: 1,
        dono: 'Harry Potter',
        origem: ' Ela é feita de azevinho e tem uma pena de fênix em seu núcleo. A mesma fênix produziu a pena utilizada para compor o núcleo da varinha de Lorde Voldemort, tornando as varinhas "irmãs. A pena que equipa o núcleo da varinha de Harry vem de Fawkes, a ave de Dumbledore, e apenas mais uma varinha compartilha do mesmo núcleo: a de Tom Riddle, ou Voldemort.',
        imagem: 'https://i.pinimg.com/564x/2d/eb/96/2deb96462f993a40e38d44b0dd195638.jpg'
    },
    {
        id: 2,
        dono: 'Hermione Granger ',
        origem: 'É uma varinha feita de videira, com 27,305cm e núcleo de fibra de coração de dragão. Essa é a varinha que Hermione Granger compra no Olivaras para seu primeiro ano em Hogwarts, mas os sequestradores a confiscam em Harry Potter e as Relíquias da Morte.',
        imagem: 'https://i.pinimg.com/564x/dd/ee/62/ddee6239f2620ecb7c80f1279477866a.jpg'
    },
    {
        id: 3,
        dono: 'Ronald Weasley ',
        origem: 'Foi uma varinha de 12" (30,48 cm) tempo, feita de freixo, e tinha um núcleo de pelo de unicórnio. Ela originalmente pertencia a seu irmão mais velho Carlos Weasley.',
        imagem: 'https://i.pinimg.com/564x/0a/e9/5a/0ae95ae9b1da17370a80ca661fc51c6e.jpg'
    },
    {
        id: 4,
        dono: 'Draco Malfoy ".',
        origem: 'Media 25 centímetros de comprimento, era feita de madeira de pilriteiro e possuía como núcleo pelo de unicórnio. A varinha foi fabricada por Garrick Olivaras, que a descreveu como "razoavelmente flexível. A varinha original de Draco Malfoy foi feita por Garrick Olivaras, feita de madeira de teixo com um núcleo de pelo de coração de dragão.',
        imagem: 'https://i.pinimg.com/564x/6f/1e/30/6f1e300a2b58304ebbaab47232605ee9.jpg'
    },
    {
        id: 5,
        dono: 'Minerva McGonagall ',
        origem: 'É feita de Abeto e corda de coração de dragão com 36 cm, boa para transfiguração. Minerva comprou esta varinha em 1947 no Olivaras pouco tempo antes de embarcar para seu primeiro ano em Hogwarts.',
        imagem: 'https://i.pinimg.com/564x/8f/60/7b/8f607be6be7b6cbfde38c465828f3a0e.jpg'
    },
    {
        id: 6,
        dono: 'Cedric Diggory ',
        origem: 'Mede 30 cm de comprimento, era feita de frei o e continha um único pelo de unicórnio. A varinha foi feita por Garrick Olivaras que a descreveu como “agradavelmente flexível”!durante a cerimônia de pesagem das varinhas para o Torneio Tribuxo.',
        imagem: 'https://i.pinimg.com/564x/7a/23/a2/7a23a29ad9e1ee9831cad86e5a946871.jpg'
    },
    {
        id: 7,
        dono: 'Cho Chang',
        origem: 'Feita de resina e com uma caixa super linda, além de uma seda interna, é ideal para deixar de decoração, exposto em seu cantinho favorito. Embora a história da varinha de Cho Chang não tenha sido detalhada, podemos presumir que ela adquiriu sua varinha antes de frequentar a Escola de Magia e Bruxaria de Hogwarts.',
        imagem: 'https://i.pinimg.com/564x/0d/67/83/0d67834c066dd48fbd2f8cf28051a6dc.jpg'
    },
    {
        id: 8,
        dono: 'Severus Snape ',
        origem: 'Descrita como sendo feita de madeira de sabugueiro e possui um núcleo de pelo de cauda de coração de dragão. Na série Harry Potter, a origem da varinha de Severo Snape não é explicitamente mencionada nos livros ou nos filmes.',
        imagem: 'https://i.pinimg.com/564x/61/4e/b7/614eb73081b0daf41538f1b86e193658.jpg'
    },
    {
        id: 9,
        dono: 'Rúbeo Hagrid',
        origem: 'É uma varinha de 40,64 cm, meio mole feita de carvalho e de núcleo desconhecido. Esta varinha é a mais longa já registrada, com exceção da Varinha de Lúcio Malfoy, que mede 45,72 cm de comprimento. Esta varinha foi tirada de Hagrid quando ele foi expulso da Escola de Magia e Bruxaria de Hogwarts em seu terceiro ano, e reparada ou substituída em algum momento antes que ele pegasse Harry no seu décimo primeiro aniversário.',
        imagem: 'https://i.pinimg.com/564x/db/a9/3f/dba93f3c3775170418308a6e43208eeb.jpg'
    },
    {
        id: 10,
        dono: 'Luna Lovegood',
        origem: 'Era de comprimento, madeira, material e núcleo desconhecidos. Luna teve esta varinha pelo menos desde no início do Ano letivo 1995-1996, seu quarto ano na Escola de Magia e Bruxaria de Hogwarts.',
        imagem: 'https://i.pinimg.com/564x/a6/c3/ec/a6c3ecd7fe8fac7c257de1aa8778e866.jpg'
    },
    {
        id: 11,
        dono: 'Neville Longbottom ',
        origem: 'Feita de cerejeira, 33,02cm, tendo como núcleo de pelo de unicórnio. Neville comprou esta varinha em 1996 após sua primeira varinha ser quebrada por Antonin Dolohov durante a Batalha do Departamento de Mistérios.',
        imagem: 'https://i.pinimg.com/564x/4a/85/1e/4a851e3500a0e3d869022bf51c477a7f.jpg'
    },
    {
        id: 12,
        dono: 'Ginevra Weasley',
        origem: 'Era feita de madeira de teixo e possuía um comprimento e núcleo desconhecidos. Assim como a maioria dos bruxos britânicos, Gina provavelmente comprou sua varinha aos onze anos na Olivaras Varinhas antes de iniciar sua educação em Hogwarts.',
        imagem: 'https://i.pinimg.com/564x/66/a3/0f/66a30f7d705f9fdba5bd8fa5e0ea8f28.jpg'
    },
    {
        id: 13,
        dono: 'Sirius Black ',
        origem: '  É de comprimento, madeira e núcleo desconhecidos. A varinha foi fabricada pela Garrick Olivaras. Sirius comprou sua varinha com a idade de onze anos na loja de varinhas Olivaras antes de começar na Escola de Magia e Bruxaria de Hogwarts em 1971.',
        imagem: 'https://i.pinimg.com/564x/75/7a/e3/757ae3cfcdd4332d4fed2200fbf497ab.jpg '
    },
    {
        id: 14,
        dono: 'Remus Lupin',
        origem: 'É feita de resina e com uma caixa super linda, além de uma seda interna, é ideal para deixar de decoração, exposto em seu cantinho favorito. Não é especificada em livros ou filmes, tendo sua desconhecida origem.',
        imagem: 'https://i.pinimg.com/564x/64/a8/b0/64a8b0e280596898910057b2bed70f54.jpg '
    },
    {
        id: 15,
        dono: 'Arthur Weasley',
        origem: 'Tem sua descrição desconhecida. A varinha de Arthur Weasley tem sua origem desconhecida.',
        imagem: 'https://i.pinimg.com/564x/34/ce/9a/34ce9ae424018800d69be659191e130c.jpg '
    },
    {
        id: 16,
        dono: 'Belatriz Lestrange',
        origem: 'Era uma varinha feita de nogueira, 32,385cm, inflexível e tinha como núcleo de corda de coração de dragão. Não é especificada em livros ou filmes, tendo sua desconhecida origem.',
        imagem: 'https://i.pinimg.com/564x/5f/b8/48/5fb848b841d1beb62cd088d2a160365a.jpg ',
    },
    {
        id: 17,
        dono: 'Lord Voldemort',
        origem: 'É feita de teixo, 34cm, tendo como núcleo pena de fênix. Ela foi fabricada por Garrick Olivaras e era a "irmã" ou "gêmea" da varinha de Harry Potter, como seus núcleos provinham de um mesmo animal.',
        imagem: 'https://i.pinimg.com/564x/9f/54/47/9f5447281366875c8b8ffef28e9ebe17.jpg'
    },
    {
        id: 18,
        dono: 'Horácio Slughorn ',
        origem: 'É feita de madeira de cedro e de núcleo de corda de coração de dragão, medindo 26 cm. É descrita como "bastante flexível. Não é especificada em livros ou filmes, tendo sua desconhecida origem.',
        imagem: 'https://i.pinimg.com/564x/74/1f/13/741f134bfa1382895eeef6f8dbd58160.jpg '
    },
    {
        id: 19,
        dono: 'Dolores Umbridge',
        origem: 'Tem 20,32 cm de comprimento, feita de bétula com núcleo de corda de coração de dragão. Não é especificada em livros ou filmes, tendo sua desconhecida origem.',
        imagem: 'https://i.pinimg.com/564x/2f/94/81/2f94813b46928768377fc51a3e40abf8.jpg'
    },
    {
        id: 20,
        dono: 'A varinha de Fred Weasley',
        origem: 'Era de feita de madeira e núcleo desconhecidos. A varinha de Fred Weasley foi comprada em 1989, quando ele tinha onze anos. Embora provavelmente tenha sido comprado de segunda mão como muitos dos pertences da Família Weasley.',
        imagem: 'https://i.pinimg.com/564x/ce/a3/bb/cea3bbea094fda8dbe76c52826fba7ff.jpg'
    },
    {
        id: 21,
        dono: 'Jorge Weasley  ',
        origem: 'Era feita de madeira e núcleo desconhecidos. Não é especificada em livros ou filmes, tendo sua desconhecida origem.',
        imagem: 'https://i.pinimg.com/564x/a3/9a/99/a39a998b9c6a3a339b3cf7acc9d535e9.jpg '
    },
    {
        id: 22,
        dono: 'Alvo Dumbledore',
        origem: 'É antiga e feita de madeira de sabugueiro. Possui comprimento de 38,1 cm de comprimento e um núcleo de pelo da cauda de testrálio. O nome Varinha das Varinhas ganhou diversos nomes através dos séculos, sendo conhecida também como Varinha do Destino e Varinha da Morte.',
        imagem: 'https://i.pinimg.com/564x/51/e3/c0/51e3c09797f4922849b2cb1dfb303a86.jpg '
    }
]

export default varinhas;