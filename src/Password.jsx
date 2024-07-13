import {useState} from 'react'
import "./password.css"

export const Password = () => {
    const[length,setLength]=useState(8);
    const[includeUpper,setIncludeUpper]=useState(true);
    const[includeLower,setIncludeLower]=useState(true);
    const[includeNumbers,setIncludeNumbers]=useState(true);
    const[includeSymbols,setIncludeSymbols]=useState(true);
    const[password,setPassword]=useState("");
   const generatePassword=()=>{
        let charset="";
        if(includeUpper) charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(includeLower) charset+="abcdefghijklmnopqrstuvwxyz";
        if(includeNumbers) charset+="123456789";
        if(includeSymbols) charset+="!@#$%^&*()_+-="
        let generator="";
        for(let i=0;i<length;i++){
            const random =Math.floor(Math.random()*charset.length);
            generator+=charset[random];
            setPassword(generator);
        }

   }
   const copy =()=>{
    navigator.clipboard.writeText(password);
    if(password)
    alert("Password copied ");
   }
 


  return (
    <div className="password">
        <h2>Strong Password Generator</h2>
        <div className="input">
            <label htmlFor='num'>Password-Length : </label>
            <input type='number' id='num' value={length} onChange={(e)=>setLength(parseInt(e.target.value))}></input>

        </div>
        <div className="checkbox">
            <input type='checkbox' id="upper" checked={includeUpper} onChange={(e)=>setIncludeUpper(e.target.checked)}>

            </input>
            <label htmlFor='upper'>Include Uppercase</label>
        </div>
        <div className="checkbox">
            <input type='checkbox' id="lower" checked={includeLower} onChange={(e)=>setIncludeLower(e.target.checked)}></input>
            <label htmlFor='lower'>Include Lowercase</label>
        </div>
        <div className="checkbox">
            <input type='checkbox' id="numbers" checked={includeNumbers} onChange={(e)=>setIncludeNumbers(e.target.checked)}></input>
            <label htmlFor='numbers'>Include Numbers</label>
        </div>
        <div className="checkbox">
            <input type='checkbox' id="symbols" checked={includeSymbols} onChange={(e)=>setIncludeSymbols(e.target.checked)}></input>
            <label htmlFor='symbols'>Include Symbols</label>
        </div>
        <button className='gpass'onClick={generatePassword}>Generate Password</button>
        <div className="generate">
            <input type="text" readOnly value={password}></input>
            <button className='copy' onClick={copy}>Copy</button>
        </div>
    </div>
  )
}
