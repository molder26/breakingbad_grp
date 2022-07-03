import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../spinner/Spinner.js";
import "./Characters.css";
import {
    getCharacters,
    emptyCharacters,
    showLoader,
    hideLoader,
} from "../../actions";
import Paginated from "../paginated/Paginated";

function Characters(props) {
    const [query, setQuery] = useState("");
    const [pagina, setPagina] = useState(0);

    useEffect(() => {
        props.emptyCharacters();
    }, []);

    useEffect(() => {
        props.emptyCharacters();
        props.getCharacters(query, pagina);
    }, [query, pagina]);

    const handleChange = (q) => {
        setQuery(q);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="Characters">
            <h1>List of Characters</h1>
            <section>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={(e) => handleChange(e.target.value)}
                    />
                </form>
            </section>

            <ul className="Characters__list">
                {props.characters
                    ? props.characters.map((c) => (
                          <li key={c.char_id}>
                              <Link
                                  to={`/characters/${c.char_id}?name=${c.name}`}
                              >
                                  {c.name}
                              </Link>
                          </li>
                      ))
                    : null}
            </ul>
            {props.loading ? (
                <Spinner />
            ) : (
                <div>
                    <hr />
                    <Paginated
                        setPagina={setPagina}
                        paginaActual={pagina}
                        tipo={"characters"}
                    />
                </div>
            )}
        </div>
    );
}
// Recuerden que el Spinner es un componente que vino de regalito, asi que lo aprovechamos para usarlo y que en caso de demorar la carga, se vea un "loading"

function mapStateToProps(state) {
    return {
        ...state,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getCharacters: (query, pagina) =>
            dispatch(getCharacters(query, pagina)),
        emptyCharacters: () => dispatch(emptyCharacters()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
