import React, { Component } from "react";
import { connect } from 'react-redux';
import { deleteFromSaved, addToSaved, getSaved } from "../../Actions/savedActivities";

class Display extends Component {
    render() {

console.log( " STATE ACCESS OF API CALL IN DISPLAY " + this.props.savedActivities)

        return (
            <div>
                <h1 > Display Results</h1>

                <h1> </h1>

            </div>
        )

    }
}

const mapStatetoProps = (state) => {

    return {
        savedActivities: state.store.globalSaved
    }


}


export default connect(mapStatetoProps, { getSaved, deleteFromSaved, addToSaved })(Display);