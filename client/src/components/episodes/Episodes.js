import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import {getEpisodes} from '../../actions';

import "./Episodes.css";

function Episodes(props) {
  const [query, setQuery] = useState("")

  // useEffect(()=>{
  //   props.getEpisodes()
  // },[])
  useEffect(() => {
    props.getEpisodes(query)
  }, [query])

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
    getEpisodes: (query)=>dispatch(getEpisodes(query))
  }
}

//===========================================//

export default connect (mapStateToProps,mapDispatchToProps)
(Episodes);
