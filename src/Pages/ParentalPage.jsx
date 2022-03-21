import React from "react";
import { useRef, useState } from "react";
import { connect } from "react-redux";
import { addWhitelist, removeWhitelist } from "./shared/actions/Whitelist.actions"
import { setParentSearch } from "../shared/actions/Search.actions"
import { useEffect } from "react";
import { fetchChannel } from "../shared/actions";

function ParentalSearch({ setParentSearch, addWhitelist, removeWhitelist, fetchChannel }) {

    const [parentCreatorQuery, setParentCreatorQuery] = useState("");
    const parentCreatorSearch = useRef(null);
    useEffect(() => {
        fetchChannel()
    }, [parentCreatorQuery])

    return (
        <div>
            <div>
                <label htmlFor="parentCreatorSearch">Search for a content creator to approve!</label>
                <input type={Text} placeholder="E.g. Jerma985" id="parentCreator" ref={parentCreatorSearch} />
                <button onClick={() => { setParentCreatorQuery(parentCreatorSearch.current.value); }}> Search creators! </button>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        parent: state.parent,
        whitelist: state.whitelisted.whitelist,
        search: state.search.parentSearchState
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setParentSearch,
        add: addWhitelist,
        remove: removeWhitelist,
    }
}


export default connect(mapDispatchToProps, mapStateToProps)(ParentalSearch)