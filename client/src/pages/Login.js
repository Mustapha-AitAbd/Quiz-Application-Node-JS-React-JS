import {useState} from 'react';
import axios from 'axios'
import './Style.css';
import Navbar from "../components/Navbar";
function Register(){
    const [inputNom, setInputNom] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setPassword] = useState('');
   
    function Click(e){
        e.preventDefault();
        axios.post('http://localhost:5000/user',{nom:inputNom,email:inputEmail,password:inputPassword})
            .then(()=>{
                console.log("exist!")
                
            })
            .catch(err=>console.log(err))
    }
    return (
        <>
        <Navbar />
            <form >
                <label>nom</label>
                <input type="text" onChange={(e)=>setInputNom(e.target.value)}/>
                <label>email</label>
                <input type="email" onChange={(e)=>setInputEmail(e.target.value)}/>
                <label>password</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
                <br />
                <br />
                <button type='submit' onClick={Click}>Login</button>
            </form>
        </>
    )
}
export default  Register;