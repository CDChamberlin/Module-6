import { useState } from "react";

function LoginForm() {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    return(
        <div>
            <div className="formRow">
                <label htmlFor="">Email Address:
                <input type="email" value={userEmail} name="userEmail"
                onChange={(e) => setUserEmail(e.target.value)}/></label>
            </div>
            <div className="formRow">
                <label htmlFor="">Password:
                <input type="password" value={userPassword} name="userPassword"
                onChange={(e) => setUserPassword(e.target.value)}/></label>
            </div>
        </div>
    )
}

export default LoginForm;