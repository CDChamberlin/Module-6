import { useState } from "react";
function Emoji(props){
    const [mood, setMood] = useState(props.symbol)
    const changeMood = () =>{
    if (mood != "😞"){
        setMood("😞")

    }
    else
    setMood(props.symbol)
   }
   
    return(
        <>
        <span className="emoji"
        role="img"
        aria-label={props.label}
        aria-hidden={props.label}>
            {mood}
        </span>
        <button onClick={() => changeMood()}>Switch Mood</button>
        </>
    )
}
Emoji.defaultProps ={
    label: "Happy",
    symbol: "😃",
}
export default Emoji;
