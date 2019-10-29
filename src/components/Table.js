import React from "react"
import Item from "./Item"
import Loading from "./Loading"
import { connect } from "react-redux"
import { getUpdate } from "../actions"
import socketIOClient from "socket.io-client";
import "../style/tableStyle.css"
import Tableoperations from "./Tableoperations"
import Nodata from "./Nodata"


class Table extends React.Component {


    componentDidMount() {
        const url = "localhost:8080"

        const socket = socketIOClient(url);

        socket.on("broadcast", (value) => {
            this.props.getUpdate(value)
        })


    }

    createItems(value) {
        let counter = 0;
        const items = value.map(item => {
            counter++
            let lastHours = new Date(item[4] * 1000).getHours()
            let lastMinutes = new Date(item[4] * 1000).getMinutes()
            let lastContact = (lastHours < 10 ? "0" + lastHours : lastHours) + ":" + (lastMinutes < 10 ? "0" + lastMinutes : lastMinutes)

            let positionHours = new Date(item[3] * 1000).getHours()
            let positionMinutes = new Date(item[3] * 1000).getMinutes()
            let positionTime = (positionHours < 10 ? "0" + positionHours : positionHours) + ":" + (positionMinutes < 10 ? "0" + positionMinutes : positionMinutes)

            return (
                <Item
                    key={Math.random()}
                    count={counter}
                    callsign={item[1]}
                    origin_country={item[2]}
                    time_position={positionTime}
                    last_contact={lastContact}
                    longitude={item[5]}
                    latitude={item[6]}
                    velocity={item[9]}
                />
            )
        })

        return items
    }


    render() {

        console.log("Table props",this.props)

        return (
            <div className="container-fluid ">
                <Tableoperations/>
                <div className="row justify-content-center tableHeader">
                    <div className="col-1 tableHeaderText">ID</div>
                    <div className="col-1 tableHeaderText" >Call Sign</div>
                    <div className="col-1 tableHeaderText">Country</div>
                    <div className="col-1 tableHeaderText">Time Position</div>
                    <div className="col-1 tableHeaderText">Last Contact</div>
                    <div className="col-1 tableHeaderText">Longitude</div>
                    <div className="col-1 tableHeaderText">Latitude</div>
                    <div className="col-1 tableHeaderText">Velocity</div>
                </div>
                {this.props.data === undefined ? <Loading /> : this.props.operation ? (this.props.operationData.length > 0 ?this.createItems(this.props.operationData): <Nodata/>) : this.createItems(this.props.data.states)}
            </div>
        )

    }
}

function mapStateToProps(state) {

    console.log("After Reducer Table", state)

    return {

        data: state.getUpdateReducer.data,
        operationData : state.getOperation.data,
        operation: state.getOperation.operation
        
    }

}

export default connect(mapStateToProps, { getUpdate })(Table)
