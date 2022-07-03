import React, { useEffect } from "react";
import {emptyDeathDetail, getDeathDetail} from "../../actions";
import {connect} from "react-redux";
import Spinner from "../spinner/Spinner.js";
import "./EpisodeDetail.css";

function DeathDetail(props) {
  const name =  props.match.params.name; // Alternativa const {id} = useParams();
  //props.getCharacterDetail(props.match.params.id)
  

  useEffect(()=>{
    props.emptyDeathDetail()
    props.getDeathDetail(name)  // --->Prueben comentando esto! Van a ver que al ingresar a un detalle, éste queda guardado en el estado globarl,
                                  // luego... al querer ingresar a un nuevo detalle, se ve por unos segundos largos el del anterior. 
                                  // Con esto logramos reducir al máximo este efecto feo.  
  },[name])

  /*
    PISTA: podemos obtener lo que llegue por parametros con el hook useParams.
    Que hace useParams? https://reactrouter.com/web/example/url-params
    */

  return (
    <div className="CharacterDetail">
      <h1>Death Details</h1>
      {props.deathDetail ?  
        <div>

          <h3>{props.deathDetail.death}</h3>
          
          <p>Cause: {props.deathDetail.cause}</p>
          <p>Responsible: {props.deathDetail.responsible}</p>
          <p>Last Words: {props.deathDetail.last_words}</p>
          <p>Season: {props.deathDetail.season}</p>
          <p>Episode: {props.deathDetail.episode}</p>
          <p>Numbers of deaths: {props.deathDetail.number_of_deaths}</p>
          

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
    emptyDeathDetail:() => dispatch(emptyDeathDetail()),
    getDeathDetail: (name) => dispatch(getDeathDetail(name))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DeathDetail);
