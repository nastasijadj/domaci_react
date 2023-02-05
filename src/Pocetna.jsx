import Kartica from "./Kartica";

 
function Pocetna({namestaj,uporedi,sort,sortiraj}) {
        
    
  return (
    <div  >
        <button className='btn-sort' onClick={()=>sortiraj()}>Sortiraj</button>  

                {sort==true? 

                
                
                    namestaj
                    .sort((a,b)=>a.cena<b.cena?-1:1)
                    .map((n)=><Kartica key={n.id} komad={n} uporedi={uporedi}></Kartica>)
                :

                    namestaj
                        .sort((a,b)=>a.cena>b.cena?-1:1)
                        .map((n)=><Kartica key={n.id} komad={n} uporedi={uporedi}></Kartica>)
                
                }
    </div>
  );
}

export default Pocetna;
