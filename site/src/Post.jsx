export function Post(props){
    console.log(props)
    return (
        <>
            <p> Autor: {props.author}</p>
            <p> Content: {props.content}</p>
        </>
    )
};