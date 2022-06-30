import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setPage } from "../../actions";

function Paginated(props) {
    const [pagina, setPagina] = useState(0);

    useEffect(() => {
        props.setPage(pagina);
      }, [pagina]);

    const totalesHardCoded = { characters: 62, episodes: 62, deaths: 65 };
    const paginasTotal = Math.ceil(totalesHardCoded[props.tipo] / 10);
    const { paginaActual } = props;
    
    return (
        <div>
            {[...Array(paginasTotal)].map((e, i) =>
                paginaActual === i ? (
                    <button disabled key={i} onClick={() => ""}>
                        {i + 1}
                    </button>
                ) : (
                    <button key={i} onClick={() => setPagina(i)}>
                        {i + 1}
                    </button>
                )
            )}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        ...state,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setPage: (pagina) => dispatch(setPage(pagina)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Paginated);
