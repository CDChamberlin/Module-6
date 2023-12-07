import UserInfo from "./UserInfo"
function Comment(props){
    return (
        <div>
        <UserInfo author={props.author}/>
        <div>{props.text}</div>
        <div>{props.date.toLocaleString()}</div>
        </div> 
    )
}
export default Comment