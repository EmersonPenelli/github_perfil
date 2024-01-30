import { useState } from "react";

import Perfil from "./components/Perfil"; 
import ReposList from "./components/ReposList";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <div>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil  nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario} /> 
        </>
      )}

    </div>
  )
}
export default App;

