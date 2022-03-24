import React from "react";
import { useRef, useState } from "react";
import { connect } from "react-redux";
import { addWhitelist, removeWhitelist } from "./shared/actions/Whitelist.actions"
import { setSearch } from "../shared/actions/Search.actions"
import { useEffect } from "react";
import { fetchChannel } from "../shared/actions";
import useParentFetch from "../hooks/useParentFetch";

function ParentalSearch({ setParentSearch, add, remove, fetchChannel, whitelist, search }) {

    const { data, error, loading } = useParentFetch(parentCreatorQuery);
    const whitelisted = useMemo(() => whitelist.map((val) => val.channel_id), [whitelist]);
    const [parentCreatorQuery, setParentCreatorQuery] = useState("");
    const parentCreatorSearch = useRef(null);
    useEffect(() => {
        if (data) {
            setSearch(data)
        }
    }, [data, setSearch])

    return (
        <div>
            <div>
                <label htmlFor="parentCreatorSearch">Search for a content creator to approve!</label>
                <input type={Text} placeholder="E.g. Jerma985" id="parentCreator" ref={parentCreatorSearch} />
                <button onClick={() => { setParentCreatorQuery(parentCreatorSearch.current.value) }}> Search creators! </button>
            </div>
            {loading && <div>Loading...</div>}
            {error && !loading && <h2>Error, request did not finish</h2>}
            {!error && search && !loading && (
                <div>
                    {search.map((val) => (
                        <ChannelDisplay
                            key={val.id}
                            channel={val}
                            addWhitelist={addWhitelist}
                            removeWhitelist={removeWhitelist}
                            isWhitelisted={whitelisted.includes(val.id)} />
                    ))}
                </div>
            )}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        parent: state.parent,
        whitelist: state.whitelist,
        search: state.search,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setSearch,
        add: addWhitelist,
        remove: removeWhitelist,
        fetchChannel,
    }
}


export default connect(mapDispatchToProps, mapStateToProps)(ParentalSearch)