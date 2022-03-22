import React from "react";
import { useRef } from "react";

function LoginPage({ setParent }) {

    const usernameInput = useRef(null);
    const passwordInput = useRef(null);

    const handleLogin = useCallback(() => {
        const username = usernameInput.current.value;
        const password = passwordInput.current.value;
        const json = login(username, password)
        if (!json.success) {
            console.log(json.error);
        } else setParent(username)
    }, [])
    return (
        <div>
            <label htmlFor="usernameField">Username: </label>
            <input type={Text} placeholder="Username" id="usernameField" ref={usernameInput}> </input>

            <br />

            <label htmlFor="passwordField">Password: </label>
            <input type={Text} placeholder="Password" id="passwordField" ref={passwordInput}> </input>

            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        parentState: [],
    };
};

const mapDispatchToProps = {
    setParent,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);