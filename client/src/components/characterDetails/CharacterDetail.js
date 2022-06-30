import { emptyCharacterDetail, getCharacterDetail } from "../../actions";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Spinner from '../Spinner'
import "./CharacterDetail.css";

function CharacterDetail(props) {
  const id = props.match.params.id; // Alternativa const {id} = useParams();
  //props.getCharacterDetail(props.match.params.id)


  useEffect(() => {
    props.emptyCharacterDetail()
    props.getCharacterDetail(id)  // --->Prueben comentando esto! Van a ver que al ingresar a un detalle, éste queda guardado en el estado globarl,
    // luego... al querer ingresar a un nuevo detalle, se ve por unos segundos largos el del anterior. 
    // Con esto logramos reducir al máximo este efecto feo.  
  }, [id])

  /*
    PISTA: podemos obtener lo que llegue por parametros con el hook useParams.
    Que hace useParams? https://reactrouter.com/web/example/url-params
    */

  return (

    <div className="CharacterDetail">
      <div className="title">
        <h1>Character Details</h1>
      </div>
      {props.characterDetail ?

        <div className="container-detail" >
          <h3 className="name">{props.characterDetail.name}</h3>

          <div className="container-cardDetail">

            <div className="photo-card face">
              <img className="CharacterDetail__Photo" src={props.characterDetail.img}
                alt="photo no fount" />
            </div>


            <div className="text-detail face">
              <p>Nickname: {props.characterDetail.nickname}</p>
              <p>Status: {props.characterDetail.status}</p>
              <p>birthday: {props.characterDetail.birthday}</p>
            </div>

          </div>
        </div>



        : <Spinner />
      }
    </div>
  );
}


function mapStateToProps(state) { //recordar que funciona como contraparte del useSelector como para poder usar el estado global en el componente a traves de props
  return {
    ...state
  }
}


function mapDispatchToProps(dispatch) {
  return {
    emptyCharacterDetail: () => dispatch(emptyCharacterDetail()),
    getCharacterDetail: (id) => dispatch(getCharacterDetail(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
