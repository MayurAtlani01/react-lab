import Card from "./Concepts/Card";
import Header from "./Concepts/Header";
import { useState } from "react";
function App() {

  const [presentCount, setPresentCount] = useState(0);
const [absentCount, setAbsentCount] = useState(0);

 function CP(){
  console.log("Present Clicked");
  setPresentCount(presentCount+1);
 }
  function AP(){
  setAbsentCount(absentCount+1);
 }
  return (
<>
  <Header AP={absentCount} CP={presentCount}/>
   
       <Card name="Mayuresh Atlani" age="85" branch="AI&DS" CP={CP} AP={AP}/>
      <Card name="Piyush Tehelani" age="88" branch="IT"  CP={CP} AP={AP}/>
       <Card name="Aaditya Haswani" age="82" branch="COMPS"  CP={CP} AP={AP}/>
  </>
   
     
    
  );
}

export default App;