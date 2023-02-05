import Kartica from "./Kartica";

 
function Pocetna({namestaj}) {
  return (
    <div  >
                {namestaj.map((n)=><Kartica key={n.id} komad={n}></Kartica>)}
    </div>
  );
}

export default Pocetna;
