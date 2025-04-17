export function Post(props){
    console.log(props)
    return (
        <>
            <h1>Post</h1>
            <p> Autor: {props.author}</p>
            <p> Content: {props.content}</p>
        </>
    )
};