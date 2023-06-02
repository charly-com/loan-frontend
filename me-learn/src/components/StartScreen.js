import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../hooks/UserContext";
import Loader from "./Loading.component";

const { logout } = require("../services/auth.service");

const StartScreen = () => {
    const { user, setUser, loading } = useContext(UserContext);
    let navigate = useNavigate();

    const handleClick = async () => {
        if(!user){
            navigate.push('/login');
            return;
        }

        await logout();
        setUser(null);
    }
    return (
        <div className="start-container">
            {!loading? <button className="button" onClick={() => (handleClick())}>
                            {user? "Logout" : "Login"}
                </button>: <Loader size="2"/>}
        </div>
    );
};

export default StartScreen;
