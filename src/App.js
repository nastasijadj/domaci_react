 
import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Pocetna from './Pocetna';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Uporedi from './Uporedi';

function App() {
 
  
  const [namestaj] = useState([

    {
      id:1,
      model: "Plakar P33", 
      kolekcija:"Kiki",    
      cena: 60000,
      slika: "https://jela.rs/pub/catalog/p3-av.jpg",
      uporedi:0,
      opis:"Plakar za dečiju sobu iz kolekcije KIKI, sa tri krila i tri fioke. Garderober koji će vas zadiviti raspoloživim prostorom za uredno odlaganje garderobe."

    },
    {
      id:2,
      model: "PLAKAR P22/GL", 
      kolekcija:"Gala",    
      cena: 38000,
      slika: "https://jela.rs/design/products/kalla/kalla-gala/P22/P22-231-156.jpg",
      uporedi:0,
      opis:"Funkcionalni plakar za spavaću sobu, iz kolekcije GALA, jake geometrijske forme, koji sadrži dva krila i dve fioke."

    },
    {
      id:3,
      model: "PLAKAR P2/ST", 
      kolekcija:"Kiki",    
      cena: 68000,
      slika: "https://jela.rs/design/products/kalla/kalla-stela/P2/P2-134-155.jpg",
      uporedi:0,
      opis:"Funkcionalni dvokrilni plakar za spavaću sobu čiste geometrijske forme, iz kolekcije STELA – element nameštaja koji karakteriše savršen sklad linija."

    },
    {
      id:4,
      model: "KLIZNI PLAKAR PK231/PN", 
      kolekcija:"Piano",    
      cena: 89000,
      slika: "https://jela.rs/pub/catalog/pk230-pn-d1.jpg",
      uporedi:0,
      opis:"Dvokrilni klizni plakar dizajnirane geometrijske forme."

    },

  ]);
  const [namestajUporedi,setNamestajUporedi]=useState([]);

  function uporedi(id){
 
    namestaj.forEach((t)=>{
        if(t.id==id)
          t.uporedi=1;
    })
    let niz =  namestaj.filter((t)=>t.uporedi==1);
    setNamestajUporedi(niz);
  }
  return ( 


      <BrowserRouter className="App">
              <Navbar  ></Navbar>
              <Routes>
                  <Route path="/" element={ <Pocetna namestaj={namestaj} uporedi={uporedi}></Pocetna>}> </Route>
                  <Route path="/uporedi" element={ <Uporedi namestaj={namestajUporedi}></Uporedi>}> </Route>
               



              </Routes>
             
            </BrowserRouter>
        
     
  );
}

export default App;
