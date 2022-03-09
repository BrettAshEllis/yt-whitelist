import React from "react";
import { useRef } from "react";



function LoginPage({ setParent }) {

    const usernameInput = useRef(null);
    const passwordInput = useRef(null);

    return (
        <div>
            <label htmlFor="username">Username: </label>
            <input type={Text} placeholder="Username" id="username" ref={usernameInput}> </input>

            <br />

            <label htmlFor="password"> Password:</label>
            <input type={Text} placeholder="Username" id="password" ref={passwordInput}> </input>

            <button>Click here to go watch some videos!</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = {
    setParent,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);