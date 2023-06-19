import {useState} from 'react';
import axios from 'axios'
import './Style.css';
import Navbar from "../components/Navbar";
function Register(){
    const [inputType, setType] = useState('');
    const [inputNom, setInputNom] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setPassword] = useState('');
   
    function Click(e){
        e.preventDefault();
        axios.post('http://localhost:5000/user',{type:inputType,nom:inputNom,email:inputEmail,password:inputPassword})
            .then(()=>{
                console.log("Data is successfully send!")
                
            })
            .catch(err=>console.log(err))
    }
    return (
        <>
        <Navbar />
            <form >
                <label>type ["etudiant"ou "professeur"]</label>
                <input type="text" onChange={(e)=>setType(e.target.value)}/>
                <label>Nom</label>
                <input type="text" onChange={(e)=>setInputNom(e.target.value)}/>
                <label>Email</label>
                <input type="email" onChange={(e)=>setInputEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
                <button type='submit' onClick={Click}>Add</button>
            </form>
        </>
    )
}
export default  Register;