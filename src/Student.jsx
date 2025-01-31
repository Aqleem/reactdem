import { useState } from "react";
import axios from "axios";

function Student(props) {
  const [ theValue , setValue] = useState("")
  const [naem , setNaem ] = useState ("")


 function gotData (){
    axios.get(`https://restcountries.com/v3.1/name/${theValue}`)
  .then(function (response) {
    // handle success
    console.log(response);
    setNaem(response.data[0].name.official)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
 }

   
  return (
    <div>{props.name}
   <input type="text" name="" id=""  onChange={(e) =>setValue(e.target.value) }/>
   <button onClick={gotData}>Button</button>
   <h4>{naem}</h4>
    </div>
  )
}

export default Student