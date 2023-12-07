function NamePart(props){
    return (
        <span className="NamePart">{props.value}</span>
    )
}

function FullName(props){
    return (<div>
        Full name: <NamePart value={props.first}/> <NamePart value={props.last} />

    </div>)
}

export default FullName