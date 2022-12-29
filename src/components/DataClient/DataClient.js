import './DataClient.css'
import Button from "../Button/Button"
import { useState } from 'react'


const DataClient = (props) => {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userTel, setUserTel] = useState("");

    const onName = (e) =>{
        setUserName(e.target.value)
    }

    const onEmail = (e) =>{
        setUserEmail(e.target.value)
    }

    const onTel = (e) =>{
        setUserTel(e.target.value)
    }

    const sendData = (e) =>{
        e.preventDefault();
        console.log(`Name: ${userName}, Email: ${userEmail}, tel: ${userTel}`)
    }

return(
    <div className='form_container'>
        <div className='form_top'>
            <h2>Confirma tu <span>Compra</span></h2>
        </div>
        <form className='form_info' onSubmit={sendData} action=''>
            <input className='input'
                type='text'
                placeholder='&#128100; Nombre' required autoFocus
                value={ userName }
                onChange= {onName}
                />
            <input className='input' 
                type='email' 
                placeholder='&#128231; Email' required 
                value={ userEmail }
                onChange= {onEmail}
                />
            <input className='input' 
                type='tel' 
                placeholder='&#128241; Telefono' required
                value={ userTel }
                onChange= {onTel}
            />
            {/* <input className='input' 
                type='text' 
                placeholder='Observaciones' 
                value={ userObs }
                /> 
            */}
            <div className='form_btn'>
                <Button type="submit">Confirmar</Button>
            </div>
        </form>
    </div>
)
}

export default DataClient