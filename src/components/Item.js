import React from "react"
import "../style/itemStyle.css"

class Item extends React.Component{

    render(){
        return(
            <div className="row  justify-content-center tableItem">
                <div className="col-1 text-center">{this.props.count}</div>
                <div className="col-1 text-center">{this.props.callsign}</div>
                <div className="col-1 text-center">{this.props.origin_country}</div>
                <div className="col-1 text-center">{this.props.time_position}</div>
                <div className="col-1 text-center">{this.props.last_contact}</div>
                <div className="col-1 text-center">{this.props.longitude}</div>
                <div className="col-1 text-center">{this.props.latitude}</div>
                <div className="col-1 text-center">{this.props.velocity}</div>
            </div>
        )
    }
}
export default Item