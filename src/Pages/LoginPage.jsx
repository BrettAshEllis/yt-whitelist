import React from "react";
import { useRef } from "react";



function LoginPage({ setParent }) {

    const parentUsername = useRef(null);
    const parentPassword = useRef(null);

    return (
        <div>
            <label htmlFor="username">Username: </label>
            <input type={Text} placeholder="Username" id="username" ref={parentUsername}> </input>

            <br />

            <label htmlFor="password">Password: </label>
            <input type={Text} placeholder="Password" id="password" ref={parentPassword}> </input>

            <button onClick={() => { setParent(parentUsername.current.value); }}>Click here to go watch some videos!</button>
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