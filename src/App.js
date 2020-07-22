import React from 'react';
import './App.css';
import Imgfille from './imagefille.jpg';
import ProfileComponents from './profile/componentProfile.js'
function App() {
const handelName = (name) =>{
  alert(name);
}
  return (
    <div className="App">
      <h1
      style={{
  
          fontFamily: 'Lucida Console, Monaco, monospace',
          fontSize: "50px",
          letterSpacing: "2px",
          wordSpacing: "2px",
          color: "#AA0C0F",
          fontWeight: "700",
          textDecoration: "none solid rgb(68, 68, 68)",
          fontStyle: "normal",
          fontVariant: "normal",
          textTransform: "uppercase",
          margin:"20px 0 50px",
          textShadow: "2px 2px 7px #CE5937",
      }}>
        Welcome to My profile</h1>
      
      <ProfileComponents
      
      fullName="Amani Messaoui"
      bio=" An electrical engineer is someone who designs and develops new electrical systems, solves problems and tests equipment. They study and apply the physics and mathematics of electricity, electromagnetism and electronics to both large and small scale systems to process information and transmit energy"
      profession="Electrical engineer"
      handelName={handelName} > 
      <img className="cl" src={Imgfille} alt="" width="300px"/>
      </ProfileComponents>
     
    </div>
  );
}

export default App;
