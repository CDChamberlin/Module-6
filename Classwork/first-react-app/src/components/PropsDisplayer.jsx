function PropsDisplayer(props){
    const stringProps = JSON.stringify(props);

    return (<>
    <h2>Check out my props!</h2>
    <h3>{stringProps}</h3></>)
}

export default PropsDisplayer;