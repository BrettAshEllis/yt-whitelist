import React from "react";
import { useRef, useState } from "react";
import { connect } from "react-redux";
import { whitelistCreator, removeWhitelist, setParentSearch } from "./shared/actions/User.actions"
import { setParentSearch } from "../shared/actions/Search.actions"

function ParentalSearch({ setParentSearch, whitelistCreator, removeWhitelist }) {

    const [parentCreatorQuery, setParentCreatorQuery] = useState("");
    const parentCreatorSearch = useRef(null);


    return (
        <div>
            <div>
                <label htmlFor="parentCreatorSearch">Search for a content creator to approve!</label>
                <input type={Text} placeholder="E.g. PBS Kids" id="parentCreator" ref={parentCreatorSearch} />
                <button onClick={() => { setParentCreatorQuery(parentCreatorSearch.current.value); }}> Search creators! </button>
            </div>
        </div>
    )
};

const mapStateToProps {
    return { }
};

const mapDispatchToProps {
    setParentSearch,
    addWhitelist,
    removeWhitelist
}


export default connect(mapDispatchToProps, mapStateToProps)(ParentalSearch)