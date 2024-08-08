import Card from "../Card/Card";

import "./SectionCards.css";

export default function SectionCards() {
 //lo 1 es conseguir la info (array)de la API de rick and morty
 //lo 2 es crear una tarjeta por cada personaje
 // luego iterar con el map para generar una tarjeta por cada personaj   

    let listaPersonajes=[
        {id: 1, 
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        image:"https://rickandmortyapi.com/api/character/avatar/1.jpeg"},

        {id: 2,
         name: 'Morty Smith',
         status: 'Alive',
         species: 'Human',
         image:"https://rickandmortyapi.com/api/character/avatar/2.jpeg" }];

         
        
    const traerPersonajes=async()=>{

        listaPersonajes=await fetch("https://rickandmortyapi.com/api/character")
         .then((resp)=>{return resp.json()})
         .then((data)=>{return data.results})
         .catch((error)=>{console.log(error)})
console.log(listaPersonajes)
    }
  return (
    <section className="fuenteBlanca">
        <button onClick={traerPersonajes }>Cargar Personajes</button>
        {
            listaPersonajes.map((personaje)=>{
                return <Card key={personaje.id} name={personaje.name} image={personaje.image} />
           })
        }
      </section>
  );
}
