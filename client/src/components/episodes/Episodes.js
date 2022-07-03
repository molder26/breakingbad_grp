import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getEpisodes, emptyEpisodes } from "../../actions";
import Paginated from "../paginated/Paginated";
import Spinner from "../spinner/Spinner.js";
import "./Episodes.css";

function Episodes(props) {
    const [query, setQuery] = useState("");
    const [pagina, setPagina] = useState(0);

    useEffect(() => {
        props.emptyEpisodes();
    }, []);

    useEffect(() => {
        props.emptyEpisodes();
        props.getEpisodes(query, pagina);
    }, [query, pagina]);

    const handleChange = (q) => {
        setQuery(q);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="Episodes">
            <h1>Episodes List</h1>
            <section>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={(e) => handleChange(e.target.value)}
                    />
                </form>
            </section>
            <ul className="Episodes__list">
                {props.episodes
                    ? props.episodes.map((episode, index) => {
                          if (episode.series === "Breaking Bad") {
                              return (
                                  <Link
                                      key={index}
                                      to={`/episodes/${episode.episode_id}`}
                                  >
                                      <li>{episode.title}</li>
                                  </Link>
                              );
                          }
                      })
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
                        tipo={"episodes"}
                    />
                </div>
            )}
        </div>
    );
}

//===========================================//

function mapStateToProps(state) {
    return {
        ...state,
    };
}

//Actions
function mapDispatchToProps(dispatch) {
    return {
        getEpisodes: (query, offset) => dispatch(getEpisodes(query, offset)),
        emptyEpisodes: () => dispatch(emptyEpisodes()),
    };
}

//===========================================//

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
