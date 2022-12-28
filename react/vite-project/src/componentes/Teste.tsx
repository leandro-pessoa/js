type TesteProps = {
    text?: string;
}
export function Teste(props: TesteProps){
    return (
        <h1>{props.text}</h1>
    );
}