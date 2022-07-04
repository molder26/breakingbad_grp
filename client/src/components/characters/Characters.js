import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import "./Characters.css";
import { getCharacters } from "../../actions";


function Characters(props) {
  const [query, setQuery] = useState("")
  const [pagina, setPagina] = useState(0)
  //aca declaramos un state(estado local) para poder actualizarlo junto con el form que va a ser nuestra suerte de input buscador
  //query es el estado y setQuery el modificador del estado.

  //*******QUÉ ES Y PARA QUÉ SIRVE useSTATE / un Hook ********
  //useState es un hook que te permite añadir el estado de react a un componente de funcion 
  // ***(¿Cuándo debería usar un Hook? Si creas un componente de función y descubres que necesitas añadirle estado, 
  //  antes había que crear una clase. Ahora puedes usar un Hook dentro de un componente de función existente.)***


  useEffect(() => {
    props.getCharacters(query, pagina)
  }, [query, pagina])

  /*
    PISTA:
    La dirección de donde vamos a tomar los datos es
    
    https://www.breakingbadapi.com/api/characters?name=

    Notesé que hay una query en la dirección. Lo que seguirá a esa query será un string 
    con un nombre o un apellido, y en base a eso la api realizará el filtrado.
    En caso de no poner nada en la query, la api traerá a todos los personajes.
  */


  const handleChange = (q) => { //controlador de eventos || manejador de eventos || disparador de funciones
    setQuery(q);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
  }

  // notarán en el return que los handlers, los enviamos en el form y en el input como una suerte de "gatillos", que disparán TODO.
  return (
    <div className="Characters">
      <h1>List of Characters</h1>
      <section>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input className="search"
            type="text"
            placeholder="Search"
            onChange={(e) => handleChange(e.target.value)}
          />
        </form>
      </section>

      <div className="container-card ">  { /*   container */}
        {
          props.characters ?
            props.characters.map((c) =>
              <div key={c.char_id}>
                <div to={`/characters/${c.char_id}`}>
                  <Link to={`/characters/${c.char_id}`}>
                    <div className="cards">
                      <div className="card">
                        {c.name}
                        <div className="card">
                          <img src={c.img} />
                          <div className="death">
                            {c.estado}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )
            : <Spinner />
        }

      </div>

      <div className="paginacion ">
        {
          pagina >= 1
            ? <button onClick={() => setPagina(pagina - 1)}>👈</button>
            : ''
        }

        <>
          <a href=""> 1 </a>
          <a href=""> 2 </a>
          <a href=""> 3 </a>
          <a href=""> 4 </a>
          <a href=""> 5 </a>
          <a href=""> 6 </a>
        </>

        <button onClick={() => setPagina(pagina + 1)}>👉</button>
      </div>
    </div >
  );
}
// Recuerden que el Spinner es un componente que vino de regalito, asi que lo aprovechamos para usarlo y que en caso de demorar la carga, se vea un "loading"

function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCharacters: (query, pagina) => dispatch(getCharacters(query, pagina)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
