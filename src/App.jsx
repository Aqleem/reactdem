

// import './App.css'
// import About from './assets/About'
// import Mapp from './Mapp'
// import Nav from './Nav'
// import Product from './Product'
// import Footer from './Footer'
// import 'animate.css';
// import xyz from './img.jpeg'
// import logo from './logo.jpg'
import { useState } from 'react'
import axios from 'axios'
import Nav from './Nav'
import Student from './Student'
import tailwindcss from '@tailwindcss/vite'


function App() {
  const [inputValue , setInputValue] = useState(" ")    //name // flage // pop // border//
  const [countryName, setCountryName] = useState('');
  const [population, setPopulation] = useState('');
  
    
  // function getData (){

  //   axios.get(`https://restcountries.com/v3.1/name/${inputValue}`)
  // .then(function (response) {
  //   // handle success
  //   setCountryName(response.data[0].name.common)
  //   setPopulation(response.data[0].population)
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })

  // }


  return (
  //  <>
  //       <Nav></Nav>
  //  <input type="text"
  //  onChange={(e) => setInputValue(e.target.value)}
  //  /> <br />
  //   <button onClick={getData}> ok </button>

  //  <h1>your country Name is {countryName}</h1>
  //  <h2>you country pop {population}</h2>
  //  < Student name="SMIT"/>

  //  </>
  <>
        <Nav lable = "Home"> </Nav>
        <Nav lable = "About"> </Nav>
        <Nav lable = "Contc"> </Nav>
        
  </>
  )
}

export default App


