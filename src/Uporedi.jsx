 

 
function Uporedi({namestaj}) {
  return (
    <div  className="uporedi">
                 <table >
                    <thead>

                    </thead>
                    <tbody>
                        <tr><th>Slika</th>{namestaj.map((t)=><td className="celijaSlika"><img src={t.slika} className="slika"/></td>)}</tr>
                        <tr><th>Model</th>{namestaj.map((t)=><td>{t.model}</td>)}</tr>
                        <tr><th>Cena</th>{namestaj.map((t)=><td>{t.cena}</td>)}</tr>
                        <tr><th>Kolekcija</th>{namestaj.map((t)=><td>{t.kolekcija}</td>)}</tr>
                   

                    </tbody>
                </table>
    </div>
  );
}

export default Uporedi;
