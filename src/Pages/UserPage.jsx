import React from "react";

function UserPage() {
    return (
        <div>
            <label htmlFor="userCreator">Creator: </label>
            <input type={Text} placeholder="Search for one of your approved content creators!" id="userCreator" />

            <label htmlFor="userVideo">Video: </label>
            <input type={Text} placeholder="Search for a video from one of your approved content creators!" id="userVideo" />

        </div>

    )
}

export default UserPage;