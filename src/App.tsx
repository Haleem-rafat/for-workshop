import { useState } from "react";
import Alert from "./Components/Alert";
import GroupList from "./Components/GroupList";

function App() {
  // array to  Rendering Lists dynamic
  const teamA: string[] = [
    "fatma",
    "sama",
    "ahmed",
    "engy",
    "bsmla",
    "mohamed",
    "naden",
    "zyad",
  ];
 // array to  Rendering Lists dynamic
  const teamB: string[] = ["nada", "clara", "abood", "waled", "yossef"];


  const [selectedname, setSelctedName] = useState<string>("");

  return (
    <>
      {selectedname && <Alert>{selectedname}</Alert>}
      {/* Component use props like a data and functiosn setSelctedName
      passing state like props 
       */}
      <GroupList title="team A" teams={teamA} funSelct={setSelctedName} />
      <GroupList title="team b" teams={teamB} funSelct={setSelctedName} />
    </>
  );
}

export default App;
