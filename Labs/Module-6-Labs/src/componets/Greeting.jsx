function Greeting(props){
    return (
        <div>
        <h2> Hello {props.name ? props.name : 'World'}</h2>
        {props.children}
        </div>
    )
}export default Greeting;
