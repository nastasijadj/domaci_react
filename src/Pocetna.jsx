import Kartica from "./Kartica";

 
function Pocetna({namestaj,uporedi}) {
  return (
    <div  >
                {namestaj.map((n)=><Kartica key={n.id} komad={n} uporedi={uporedi}></Kartica>)}
    </div>
  );
}

export default Pocetna;
