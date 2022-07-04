import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getDeaths } from '../../actions';
import "./Deaths.css";
import Spinner from '../Spinner';


function Deaths(props) {
  useEffect(() => {
    props.getDeaths()
  }, [])

  return (
    <div className="container">
      <h1>Deaths List</h1>
      <ul className="containerDeaths">
        {
          props.deaths ?
            props.deaths.map((d, index) => {
              return <Link key={index} to={`/deaths/${d.death}`}>
                <div className="card">
                  {d.death}
                </div>
              </Link>
            }) : <Spinner />
        }
      </ul>
    </div>
  );
}

//===========================================//

function mapStateToProps(state) {
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

export default connect(mapStateToProps, mapDispatchToProps)
  (Deaths);
