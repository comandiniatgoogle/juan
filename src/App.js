import { useState } from "react";
import "./App.css";
import Welcome from "./Welcome";

const employees = [
  { ldap: 'comandini', fullName: 'Daniele Comandini' },
  { ldap: 'simonetti', fullName: 'Juan Simonetti' },
  { ldap: 'fpetroni', fullName: 'Francesco Petroni' },
  { ldap: 'smoroz', fullName: 'Sergey Moroz' },
  { ldap: 'sjasneet', fullName: 'Jasneet Singh' },
  { ldap: 'angelvo', fullName: 'Angel Vo' },
]


const App = () => {
  // USE STATE takes a arguemtn that is the default starting value
  // returns two things
  // first: the variable
  // second: the function that changes the value of the variable
  const [ showList, setShowList ] = useState(false)

  const loadEmployee = () => {
    console.log( 'Hello' )
    setShowList(true)
  }

  return (
    <div className="App">
      <Welcome name="Daniele" surname="Comandini" status="SuperHot"/>      
      { showList && <p>HELLO</p> }
      { !showList && <button onClick={loadEmployee}>CLICK ME</button> }
    </div>
  );
};

export default App;
