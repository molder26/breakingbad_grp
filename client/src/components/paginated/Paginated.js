import React, { useEffect, useState } from "react";

export default function Paginated({ setPagina, paginaActual, tipo }) {
    const totalesHardCoded = { characters: 62, episodes: 62, deaths: 65 };
    const paginasTotal = Math.ceil(totalesHardCoded[tipo] / 10);
    
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