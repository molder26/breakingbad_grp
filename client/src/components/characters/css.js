return (
    <div className="Characters">
      <h1>List of Characters</h1>
      <section>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input className="search"
            type="text"
            placeholder="Search"
            onChange={(e) => handleChange(e.target.value)}
          />
        </form>
      </section>

      <div className="container-card ">  { /*   container */}
        {
          props.characters ?
            props.characters.map((c) =>
              <div key={c.char_id}>
                <div to={`/characters/${c.char_id}`}>
                  <Link to={`/characters/${c.char_id}`}>
                    <div className="cards">
                      <div className="card">
                        {c.name}
                        <div className="card">
                          <img src={c.img} />
                          <div className="death">
                            {c.estado}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )
            : <Spinner />
        }

      </div>

      <div className="paginacion ">
        {
          pagina >= 1
            ? <button onClick={() => setPagina(pagina - 1)}>👈</button>
            : ''
        }

        <>
          <a href=""> 1 </a>
          <a href=""> 2 </a>
          <a href=""> 3 </a>
          <a href=""> 4 </a>
          <a href=""> 5 </a>
          <a href=""> 6 </a>
        </>

        <button onClick={() => setPagina(pagina + 1)}>👉</button>
      </div>
    </div >