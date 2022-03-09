import React from "react";
import { useRef, useState } from "react";
import { connect } from "react-redux";
import { whitelistCreator, removeWhitelist, setParentSearch } from "./shared/actions/User.actions"

function ParentalSearch({ setParentSearch, whitelistCreator, removeWhitelist }) {

    const [parentCreatorQuery, setParentCreatorQuery] = useState("");
    const [parentVideoQuery, setParentVideoQuery] = useState("");
    const parentCreatorSearch = useRef(null);
    const parentVideoSearch = useRef(null);


    return (
        <div>
            <div>
                <label htmlFor="parentCreatorSearch">Search for a content creator to approve!</label>
                <input type={Text} placeholder="E.g. PBS Kids" id="parentCreator" ref={parentCreatorSearch} />
                <button onClick={() => { setParentCreatorQuery(parentCreatorSearch.current.value); }}> Search creators! </button>
            </div>
            <br />
            <div>
                <label htmlFor="parentVideoSearch">"Search for a video to approve!"</label>
                <input type={Text} placeholder="E.g. Minecraft Lets Play" id="parentVideo" />
                <button onClick={() => { setParentVideoQuery(parentVideoSearch.current.value); }}> Search videos! </button>
            </div>
        </div>
    )
};

const mapStateToProps {
    return { }
}

const mapDispatchToProps {
    setSearch,
    whitelistCreator,
    removeWhitelist
}


export default connect(mapDispatchToProps, mapStateToProps)(ParentalSearch)