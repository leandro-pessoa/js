import ReactImg from '../assets/react.svg'

export default function Header(){
    return(
        <div>
            <header>
                <img src={ReactImg}/>
                <h1>React</h1>
            </header>
        </div>
    )
}