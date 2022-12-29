import React from 'react'

type Props = {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    youtube?: string;
    telefone?: number;
    soma?: string;
} 

export function Dados(props: Props){
    const estiloH3 = {
        fontSize: '1.5em',
        marginTop: '10px',
        marginBottom: '10px',
        color: 'rgb(32, 178, 170)',
        textShadow: '1px 1px rgba(0, 0, 0, 0.562)'
    }
    return(
        <div>
            <section id='dados' style={{fontWeight: 'bold'}}>
                <h3 style={estiloH3}>Redes sociais</h3>
                <p>Instagram: {props.instagram}</p>
                <p>Facebook: {props.facebook}</p>
                <p>Twitter: {props.twitter}</p>
                <p>Youtube: {props.youtube}</p>
                <p>Telefone: {props.telefone}</p>
                <p>Soma: {props.soma}</p>
            </section>
        </div>
    );  
}