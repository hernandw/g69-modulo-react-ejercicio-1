import Card from "./components/Card";
import { useState } from "react";
import { shoes } from "./data/data";

const App = () => {


  const [datos, setDatos] = useState(shoes);
  const [activo, setActivo ] = useState(false)
 

  return (
    <div className="container-xl mt-5">
      <h2 className="text-center">Nuestra Coleccion</h2>

      <div className="row mt-5 gap-5">
       {
         datos.map((zapato) => {
           return <Card key={zapato.id} {...zapato} />
         })
       }

      </div>
    </div>
  );
};

export default App;
