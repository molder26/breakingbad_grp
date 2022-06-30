import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import {getDeaths} from '../../actions';

import "./Deaths.css";

function Deaths(props) {

  useEffect(()=>{
    props.getDeaths()
  },[])

  return (
    <div className="Episodes">
      <h1>Deaths List</h1>
      <ul className="Episodes__list">
        {
        props.deaths?
        props.deaths.map((d, index)=>{
          return <Link key={index} to={`/deaths/${d.death}`}> 
            <li>
              {d.death}
            </li>
          
            </Link>
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
    getDeaths: () => dispatch(getDeaths())
  }
}

//===========================================//

export default connect (mapStateToProps,mapDispatchToProps)
(Deaths);
