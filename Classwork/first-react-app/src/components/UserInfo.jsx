import Avatar from "./Avatar";

function UserInfo(props) {
  return (
    <div>
      {" "}
      {/* the user info is one aspect of the comment */}
      <Avatar author={props.author}/>
      <div className="UserInfo-name">{props.author.name}</div>
    </div>
  );
}
export default UserInfo
