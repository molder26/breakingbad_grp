import React from "react";
import "./Paginated.scss"

export default function Paginated({ setPagina, paginaActual, tipo }) {
    const totalesHardCoded = { characters: 62, episodes: 62, deaths: 65 };
    const paginasTotal = Math.ceil(totalesHardCoded[tipo] / 10);
    
    return (
        <div id="app" className="container">
            <ul className="page">
            {[...Array(paginasTotal)].map((e, i) =>
                paginaActual === i ? (
                    <li className="page__numbers active" key={i} onClick={() => ""}>{i + 1}</li>
                    // <button disabled key={i} onClick={() => ""}>
                    //     {i + 1}
                    // </button>
                ) : (
                    <li className="page__numbers" key={i} onClick={() => setPagina(i)}>{i + 1}</li>
                    // <button key={i} onClick={() => setPagina(i)}>
                    //     {i + 1}
                    // </button>
                )
            )}
            

    
    
    {/* <li class="page__numbers active">2</li>
    <li class="page__numbers">3</li>
    <li class="page__numbers">4</li>
    <li class="page__numbers">5</li>
    <li class="page__numbers">6</li> */}
    
    </ul>
        </div>
    );
}