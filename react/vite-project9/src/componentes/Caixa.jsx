export default function Caixa(props){
    return(
        <div>
            <h1>{props.children[0]}</h1>
            <p>{props.children[1]}</p>
        </div>
    )
}