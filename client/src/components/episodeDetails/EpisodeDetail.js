import React, { useEffect } from "react";
import {emptyEpisodeDetail, getEpisodeDetail} from "../../actions";
import {connect} from "react-redux";
import Spinner from "../spinner/Spinner.js";
import "./EpisodeDetail.css";

function EpisodeDetail(props) {
  const id= props.match.params.id; // Alternativa const {id} = useParams();
  //props.getCharacterDetail(props.match.params.id)
  

  useEffect(()=>{
    props.emptyEpisodeDetail()
    props.getEpisodeDetail(id)  // --->Prueben comentando esto! Van a ver que al ingresar a un detalle, éste queda guardado en el estado globarl,
                                  // luego... al querer ingresar a un nuevo detalle, se ve por unos segundos largos el del anterior. 
                                  // Con esto logramos reducir al máximo este efecto feo.  
  },[id])

  /*
    PISTA: podemos obtener lo que llegue por parametros con el hook useParams.
    Que hace useParams? https://reactrouter.com/web/example/url-params
    */

  return (
    <div className="CharacterDetail">
      <h1>Episode Details</h1>
      {props.episodeDetail ?  
        <div>

          <h3>{props.episodeDetail.title}</h3>
          
          <p>Season: {props.episodeDetail.season}</p>
          <p>Episode: {props.episodeDetail.episode}</p>
          <p>Air Date: {props.episodeDetail.air_date}</p>
          <h4>Personajes:</h4>
          {
            props.episodeDetail.characters && props.episodeDetail.characters.map(c => (
              <p key={c}>{c}</p>
            ))
          
          }
          

        </div>
      :<Spinner/>
    }
    </div>
  );
}


function mapStateToProps(state){ //recordar que funciona como contraparte del useSelector como para poder usar el estado global en el componente a traves de props
  return {
    ...state
  }
}


function mapDispatchToProps(dispatch) {   
  return {
    emptyEpisodeDetail:() => dispatch(emptyEpisodeDetail()),
    getEpisodeDetail: (id) => dispatch(getEpisodeDetail(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EpisodeDetail);
