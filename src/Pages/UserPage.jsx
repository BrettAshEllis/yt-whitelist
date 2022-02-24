import React from "react";

function UserPage() {
    return (
        <div>
            <label htmlFor="userSearch">Search for videos, kiddo</label>
            <input type={Text} id="userSearch" />
            <br />

            <label></label>
            <select>
                <option>Channel</option>
                <option>Videos</option>
            </select>
        </div>

    )
}

export default UserPage;