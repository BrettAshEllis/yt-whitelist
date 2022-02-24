import React from "react";
import { connect } from "react-redux"
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, parent, isParent }) {

    const redirectTo = isParent ? "/ParentalPage" : "/UserPage"

    if ((parent && isParent) || (!parent && !isParent)) {
        return <> {children} </>
    }
    else {
        return <Navigate to={redirectTo} />;
    }
    const mapStateToProps = (state) => {
        return {
            parent = state.parent,
        }
    }
    const mapDispatchToProps = {};


}

export default connect(mapDispatchToProps, mapStateToProps)(ProtectedRoute);