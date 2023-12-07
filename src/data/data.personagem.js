const personagens = [
    {
        id: 1,
        nome: "Harry Potter", 
        imagem: "https://ik.imagekit.io/hpapi/harry.jpg ",
        casa: "Grifinória",
        patrono: "Cervo",
        varinha: "Madeira, pena da cauda de fênix",
        ator: "Daniel Radcliffe"
    },
    {
        id: 2,
        nome: "Hermione Granger",
        imagem: "https://ik.imagekit.io/hpapi/hermione.jpeg",
        casa: "Grifinória",
        patrono: "Lontra",
        varinha: "Videira, coração de dragão",
        ator: "Emma Watson"
    },
    {
        id: 3,
        nome: "Rony Weasley",
        imagem: "https://ik.imagekit.io/hpapi/ron.jpg",
        casa: "Grifinória",
        patrono: "Cachorro (jack russell terrier)",
        varinha: "Salgueiro, cabelo de cauda de unicórnio",
        ator: "Rupert Grint"
    },
    {
        id: 4,
        nome: "Draco Malfoy",
        imagem: "https://ik.imagekit.io/hpapi/draco.jpg",
        casa: "Sonserina",
        patrono: "Desconhecido",
        varinha: "Espinheiro, cabelo de cauda de unicórnio",
        ator: "Tom Felton"
    },
    {
        id: 5,
        nome: "Minerva McGonagall",
        imagem: "https://ik.imagekit.io/hpapi/mcgonagall.jpg",
        casa: "Grifinória",
        patrono: "Gato Malhado",
        varinha: "Abeto, coração de dragão",
        ator: "Dame Maggie Smith"
    },
    {
        id: 6,
        nome: "Cedric Diggory",
        imagem: "https://ik.imagekit.io/hpapi/cedric.png",
        casa: "Lufa-Lufa",
        patrono: "Rena",
        varinha: "Maderira cinza, cabelo de unicórnio",
        ator: "Robert Pattinson"
    },
    {
        id: 7,
        nome: "Cho Chang",
        imagem: "https://ik.imagekit.io/hpapi/cho.jpg",
        casa: "Corvinal",
        patrono: "Cisne",
        varinha: "Desconhecido",
        ator: "Katie Leigh"
    },
    {
        id: 8,
        nome: "Severus Snape",
        imagem: "https://ik.imagekit.io/hpapi/snape.jpg ",
        casa: "Sonserina",
        patrono: "Corça",
        varinha: "Desconhecido",
        ator: "Alan Rickman"
    },
    {
        id: 9,
        nome: "Rubeus Hagrid",
        imagem: "https://ik.imagekit.io/hpapi/hagrid.png",
        casa: "Grifinória",
        patrono: "Desconhecido",
        varinha: "Carvalho",
        ator: "Robbie Coltrane"
    },
    {
        id: 10,
        nome: "Luna Lovegood",
        imagem: "https://ik.imagekit.io/hpapi/luna.jpg ",
        casa: "Corvinal",
        patrono: "Lebre",
        varinha: "Desconhecido",
        ator: "Evanna Lynch",
    },
    {
        id: 11,
        nome: "Neville Longbottom",
        imagem: "https://ik.imagekit.io/hpapi/neville.jpg ",
        casa: "Grifinória",
        patrono: "Não-corpóreo",
        varinha: "Cereja, cabelo de cauda de unicórnio",
        ator: "Matthew Lewis",
    },
    {
        id: 12,
        nome: "Ginny Weasley",
        imagem: "https://ik.imagekit.io/hpapi/ginny.jpg",
        casa: "Grifinória",
        patrono: "Cavalo",
        varinha: "Teixo",
        ator: "Bonnie Wright",
    },
    {
        id: 13,
        nome: "Sirius Black",
        imagem: "https://ik.imagekit.io/hpapi/sirius.JPG",
        casa: "Grifinória",
        patrono: "Cachorro Negro",
        varinha: "Desconhecido",
        ator: "Gary Oldman",
    },
    {
        id: 14,
        nome: "Remus Lupin",
        imagem: "https://ik.imagekit.io/hpapi/lupin.jpg",
        casa: "Grifinória",
        patrono: "Lobo",
        varinha: "Cipreste, cabelo de cauda de unicórnio",
        ator: "David Thewlis",
    },
    {
        id: 15,
        nome: "Arthur Weasley",
        imagem: "https://ik.imagekit.io/hpapi/arthur.jpg",
        casa: "Grifinória",
        patrono: "Doninha",
        varinha: "Desconhecido",
        ator: "Mark Williams",
    },
    {
        id: 16,
        nome: "Bellatrix Lestrange",
        imagem: "https://ik.imagekit.io/hpapi/bellatrix.jpg",
        casa: "Sonserina",
        patrono: "Desconhecido",
        varinha: "Madeira, coração de dragão",
        ator: "Helena Bonham Carter",
    },
    {
        id: 17,
        nome: "Lord Voldemort",
        imagem: "https://ik.imagekit.io/hpapi/voldemort.jpg",
        casa: "Sonserina",
        patrono: "Desconhecido",
        varinha: "teixa, pena da cauda de fênix",
        ator: "Ralph Fiennes",
    },
    {
        id: 18,
        nome: "Dolores Umbridge",
        imagem: "https://ik.imagekit.io/hpapi/umbridge.jpg",
        casa: "Sonserina",
        patrono: "Gato persa",
        varinha: "Madeira, coração de dragão",
        ator: "Imelda Staunton",
    },
    {
        id: 19,
        nome: "Fred Weasley",
        imagem: "https://i.pinimg.com/474x/09/a5/89/09a589430503707257d02bc48e8aa397.jpg",
        casa: "Grifinória",
        patrono: "Pássaro (pega)",
        varinha: "Madeira e núcleo desconhecido",
        ator: "James Phelps",
    },
    {
        id: 20,
        nome: "George Weasley",
        imagem: "https://i.pinimg.com/474x/09/a5/89/09a589430503707257d02bc48e8aa397.jpg",
        casa: "Grifinória",
        patrono: "Pássaro (pega)",
        varinha: "Madeira e núcleo desconhecido",
        ator: "Oliver Phelps",
    },
    {
        id: 21,
        nome: "Alvo Dumbledor",
        imagem: "https://cdn.pensador.com/img/authors/al/vo/alvo-dumbledore-l.jpg",
        casa: "Grifinória",
        patrono: "Fênix",
        varinha: "Madeira de sabugueiro e o núcleo de pelo da cauda de testrálio",
        ator: "Michael Gambon",
    },
    {
        id: 22,
        nome:"Horance Slughrorn",
        imagem: "https://ik.imagekit.io/hpapi/slughorn.JPG",
        casa: "Sonserina",
        patrono: "Desconhecido",
        varinha: "Madeira, coração de dragão",
        ator: "Jim Broadbent",

    }

]

export default personagens;