
import { useState } from 'react';
import './App.css';
import BmiList from './components/BmiList';
import BmiScore from './components/BmiScore';
import Form from './components/Form';

function App() {
  const [bmi,setbmi]=useState("")
  const [type,settype]=useState("overweight")
  
  

  const onForm=(w,h)=>{
    // calling function calbmi
    let b=calBmi(w, h); 
    setbmi(b);
   
  };
  

   // function to calculate bmi WE USE THIS EQUATION

  // const calBmi = (w, h) =>
  // { return (w / (h * h)).toFixed(2);
  // or   };

  const calBmi = (w, h) => (w / (h * h)).toFixed(2);
  return (
    <>
  <div className="container">
        <div align="center">
          <Form getData={onForm}/>
       </div>
<div>

    <BmiScore bmiNo={bmi} bmiNa={type}/>

    </div>
    <BmiList/>
 </div>
    </>
  );
}

export default App;
