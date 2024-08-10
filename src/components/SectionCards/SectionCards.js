import { useState,useEffect } from "react";

import Card from "../Card/Card";


import "./SectionCards.css";

export default function SectionCards() {
 //lo 1 es conseguir la info (array)de la API de rick and morty
 //lo 2 es crear una tarjeta por cada personaje
 // luego iterar con el map para generar una tarjeta por cada personaj   
    let [listaPersonajes,setListaPersonajes]=useState([]);

        const traerPersonajes=async()=>{
          let info= await fetch("https://rickandmortyapi.com/api/character")//ejecutar la peticion a esa direccion
          .then((resp)=>{return resp.json()})//accionar si logra obtener la info
          .then((data)=>{ return data.results})
              //siguiente accion que hacemos si todo salio bien.En este caso aprovechamos que sabemos que esta API en particular devuelve la lista de personajes dentro de la propiedad "results" 
          .catch((error)=>{console.log(error)})//accionar si no logra obtenerla
    
      //json() -> metodo que evalua lo que le pasemos como JSON y lo parsea , lo tranasforma a una array|objeto
     console.log(info)
    //listaPersonajes=info;//en la proxima clase mejoramos esta asignacion con el concepto de "state" o "estados"
    
    setListaPersonajes(info)

        };
        
        useEffect(()=>{
          traerPersonajes()
        } ,[]);

useEffect(()=>{
  console.log("se cambio el estado listaPersonajes")
},[listaPersonajes] )

        return (
           <section className="fuenteBlanca">
                  {
                   listaPersonajes.map((personaje)=>{
                       return <Card key={personaje.id} infoPersonaje={personaje}  />
                  })
               }
             </section>
             )


        

     };

    
        
    

        
          
   
      
