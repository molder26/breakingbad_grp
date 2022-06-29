import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import {getEpisodes, emptyPage, emptyEpisodes} from '../../actions';
import Paginated from "../paginated/Paginated";
import "./Episodes.css";


function Episodes(props) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    props.emptyEpisodes();
    props.emptyPage();
}, []);

  useEffect(() => {
    props.getEpisodes(query, props.page);
    console.log(props.page);
  }, [query, props.page]);

  const handleChange=(q)=>{ //controlador de eventos || manejador de eventos || disparador de funciones
    setQuery(q);
  }
 
 
  const handleSubmit=(event)=>{
    event.preventDefault();
  }

  return (
    <div className="Episodes">
      <h1>Episodes List</h1>
      <section>
        <form onSubmit={(e)=>handleSubmit(e)}> 
          <input 
          type="text"
          placeholder="Search"
          onChange={(e)=>handleChange(e.target.value)}
          />
        </form>
      </section>
      <ul className="Episodes__list">
        {
        props.episodes?
        props.episodes.map((episode, index)=>{
          if(episode.series === "Breaking Bad"){
            return <Link key={index} to={`/episodes/${episode.episode_id}`}> 
              <li>
                {episode.title}
              </li>
              </Link>
          }
        }):<h1>Loading</h1>
        }
      </ul>
      <hr />
      <Paginated paginaActual={props.page} tipo={"episodes"} />
    </div>
  );
}

//===========================================//

function mapStateToProps(state){
  return {
    ...state
  }
}


//Actions
function mapDispatchToProps(dispatch) {
  return {
    getEpisodes: (query, offset)=>dispatch(getEpisodes(query, offset)),
    emptyPage: () => dispatch(emptyPage()),
    emptyEpisodes: () => dispatch(emptyEpisodes()),
  }
}

//===========================================//

export default connect (mapStateToProps,mapDispatchToProps)
(Episodes);
