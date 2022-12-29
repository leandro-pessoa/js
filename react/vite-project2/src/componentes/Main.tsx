import React from 'react'
import { useState } from 'react'
import { Dados } from "../componentes/Dados"
import { Tempo } from "../componentes/Tempo"
import { State } from "../componentes/State"

export function Main(){
    const secundario = 'Exemplo 2'
    const insta = (arg: string) => {
        return arg;
    }
    const youtube = 'Sit'
    const tel = 948576348
    const somar = (v1:number, v2:number) => {
        let resultado = `A soma de ${v1} + ${v2} equivale a ${v1 + v2}`
        return resultado;
    }
    const [num, setNum] = useState(40)
    return(
        <div>
            <main>
                <h2>Título secundário: {secundario}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate esse nulla ipsam iusto dolor dolorem assumenda perspiciatis omnis praesentium unde obcaecati quidem blanditiis deserunt, voluptatem vitae consequuntur quo nam!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique sed atque earum consequatur unde, minima fuga, voluptatem nulla nobis enim dolores et in quidem rerum cupiditate. Praesentium quidem nam minima!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequatur, impedit reiciendis dolore qui explicabo error incidunt corrupti. Animi nesciunt eveniet quam accusamus minus corporis placeat tempora doloremque. Quos, cupiditate?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, at tempore ratione cum ipsum impedit ullam voluptas dolorum debitis adipisci iste earum, dolores, blanditiis cumque quae doloribus ea recusandae ipsam!</p>
                <Dados
                    instagram={insta('Lorem')}
                    facebook="Ipsum"
                    twitter="Dolor"
                    youtube={youtube}
                    telefone={tel}
                    soma={somar(20, 30)}
                />
                <Tempo/>
                <h2>Estado</h2>
                <span>Valor de num no Main: {num}</span>
                <State num={num} setNum={setNum}/>
            </main>
        </div>
    );
}