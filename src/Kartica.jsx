 
function Kartica({komad,uporedi}) {
    return (
        <main><div className="card">
    
        <div className="card__body">
          <div className="half">
            <div className="featured_text">
              <h1>{komad.model}</h1>
              <p className="sub">Iz kolekcije {komad.kolekcija}</p>
              <p className="price">{komad.cena} RSD</p>
            </div>
            <div className="image">
              <img src={komad.slika} alt=""/>
            </div>
          </div>
          <div className="half">
            <div className="description">
              <p>   {komad.opis}</p>
            </div>
            <span className="stock"><i className="fa fa-pen"></i> Na stanju</span>
            
          </div>
        </div>
        <div className="card__footer">
           
          <div className="action">
            <button type="button"  onClick={()=>uporedi(komad.id)}>Uporedi</button>
          </div>
        </div>
      </div></main>
      
    );
  }
  
  export default Kartica;
  