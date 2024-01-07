import { useState } from "react";
function Emoji(props){
    const [mood, setMood] = useState(props.symbol ? props.symbol : '&#128512;')
    const changeMood = () =>{
    if (mood != "&#128542;"){
        setMood("&#128542;")
    }
    else
    setMood(props.symbol)
   }
   
    return(
        <>
        <span className="emoji"
        role="img"
        aria-label={props.label ? props.label: ""}
        aria-hidden={props.label ? false : true}>
            {mood}
        </span>
        <button onClick={() => changeMood()}>Switch Mood</button>
        </>
    )
}
Emoji.defaultProps ={
    label: "Happy",
    symbol: "&#128512;"
}
export default Emoji;
