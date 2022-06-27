import React, { useState, useEffect } from "react";
import logo from "../../img/logo.png";
import "./Home.css";
import {addQuote} from "../../actions";
import Spinner from "../Spinner";
import {connect} from "react-redux"


function Home(props) {

  //const {quote} = useSelector((state)=>state) -----> esto sería el hook que podemos usar si queremos traer el estado y evitar el mapStateToProps
  // const quote = useSelector((state)=>state.quote) -----> esto es un sinónimo, de hecho, a nosotros nos gusta más esta forma

  /*
  PISTA: podemos usar el hook useEffect para llamar a la api. 
  Que haces useEffect? https://es.reactjs.org/docs/hooks-effect.html
  */

  useEffect(()=>{
    props.addQuote()
  },[])  
  // 1. useEffect es el hook que reemplaza a componentDidMount, componentDidUpdate y componentWillUnmount
  // 2. Entra en acción cada vez que se recarga el estado.
  // 3. Recibe 2 parámetros, el primero es una functión que debería retornar aquellos "efectos" que queremos ocasionar.. más comunmente, las acciones,
  // 4. el segundo parámetro es un arreglo de dependencias. TIP: Se ejecutan en orden de escritura.
  //----> a. Si la dependencia está vacía, se ejecuta por única vez.
  //----> b. Si no hay dependencia, entonces recargará siempre (no es conveniente/óptimo),
  //----> c. Si pongo un estado en el arreglo, se ejecuta el efecto solo cuando dicho estado cambie.

  return (
    <div className="Home">
      <img src={logo} alt="" className="Home__logo" />
      {
        props.quote ? // la lógica consiste en ver si el estado en cuestión (propiedad del estado global que recibimos por props,
                      // gracias al connect y el mapStateToProps) tiene "algo" ya cargado, en otras palabras, si logró obtener los datos de la API.
        <div>         
          <h2>"{props.quote.quote}"</h2> 
          <h3>{props.quote.author}</h3>
          <p>From: {props.quote.series}</p>
        </div> : <Spinner/>
        // para cada propiedad que queramos renderizar, recuerden chequear cómo está en la API
      }
    </div>
  );
}

function mapStateToProps(state){ // esta es la contracara del useSelector, siempre tiene una estructura igual o parecida.
  return {                       // la misma recibe el estado por parámetro y la idea es, como la función ya lo anuncia, "map state to prop",
    ...state                    //  convertir el estado (que es un objeto que tenemos en el reducer, con propiedades de acuerdo a lo que hayamos inventado),
  }                             //  a una propiedad del componente
}

function mapDispatchToProps(dispatch){  // al igual que el de state to props, acá convertimos la acción en propiedad
  return {
    addQuote: ()=>dispatch(addQuote())  
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home); //aca es donde se conectan el estado y el dispatch al componente (en caso de no usar hooks)
