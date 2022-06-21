// Lista de compra

const listaCompra = ['Pan', 'Leche', 'Mermelada', 'Tomates', 'Azucar']

// Agrego item

listaCompra.push('Aceite de Girasol')
console.log(listaCompra)

// Elimino item

listaCompra.pop('Aceite de Girasol')
console.log(listaCompra)

// Lista de peliculas

const peliculas = [{
    titulo: 'Harry Potter', director: 'J.K. Rowling', fecha: 2006}, {
    titulo: 'Dune', director: 'Denis Villenue', fecha: 2022}, {
    titulo: 'El Origen', director:'Martin Scorsese', fecha: 2015}
]

// Lista de peliculas filtradas

const peliculasFiltradas = peliculas.filter( estreno => {
    if (estreno.fecha >= 2010) {
        console.log(estreno)
    } 
})

// Lista de directores

const directores = peliculas.map(director => `${director.director}`) 
console.log(directores)

// Lista titulo peliculas

const tituloPelicula = peliculas.map(pelicula => `${pelicula.titulo}`) 
console.log(tituloPelicula)

// Lista concatenada directores y peliculas

const peliculasYdirectores = tituloPelicula.concat(directores)
console.log(peliculasYdirectores)

// Lista concatenada con propagacion

const peliculasYdirectores2 = [...tituloPelicula, ...directores]
console.log(peliculasYdirectores2)

