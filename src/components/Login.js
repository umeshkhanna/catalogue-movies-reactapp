import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Input from "./form/Input";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setJwtToken } = useOutletContext()
    const { setAlertClassName } = useOutletContext()
    const { setAlertMessage } = useOutletContext()
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password)

        if(email == "admin@admin.com"){
            setJwtToken(email)
            setAlertClassName("d-none")
            setAlertMessage("")
            navigate("/")
        }else{
            setAlertClassName("alert-danger")
            setAlertMessage("Invalid Credentials!")
        }
    }
    return (
        <div className="col-md-6 offset-md-3">
            <h2>Login!</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <Input 
                    title="Email Address"
                    type="email"
                    name="email"
                    className="form-control"
                    autoComplete="email-new"
                    onChange={(event) => setEmail(event.target.value)}
                    id="email"
                />
                <Input 
                    title="Password"
                    type="password"
                    name="password"
                    className="form-control" 
                    autoComplete="password-new"
                    onChange={(event) => setPassword(event.target.value)}
                    id="password"
                />
                <hr />
                <input 
                    type="submit"
                    className="btn btn-primary"
                    value="Login"
                />
            </form>
        </div>
    )
}

export default Login