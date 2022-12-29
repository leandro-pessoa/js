import { useState } from 'react'

export default function Log(){
    const [log, login] = useState(false)
    const logIn = () => {
        return <p>Usuário logado</p>
    }
    const logOff = () => {
        return <p>Usuário não está logado</p>
    }
    return (
        <div>
            <p>{log ? logIn() : logOff()}</p>
            <button onClick={() => login(!log)}>
                {log ? 'Logoff' : 'Login'}
            </button><br/>
        
        </div>
    );
}