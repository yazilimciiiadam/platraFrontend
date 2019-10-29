import "../style/leafmapStyle.css"

import React from "react"
import { connect } from "react-redux"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"




class Leafmap extends React.Component {

    createMarkers() {

        const markers = this.props.data.states.map(marker => {
            const position = [marker[6], marker[5]]

            return (
                <Marker position={position}>
                    <Popup>
                        {marker[1]}
                        Velocity:{marker[9]}
                     </Popup>

                </Marker>
            )


        })
        console.log("markers",markers)
        return markers

    }


    render() {
        const position = [47.36667, 8.55]
        return (
            <div className="leafletContainer">
                <Map center={position} zoom={7} style={{ height: '500px' }}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {this.props.data === undefined ? "" :this.createMarkers()}
                </Map>
            </div>

        )
    }
}
function mapStateToProps(state) {



    return {
        data: state.getUpdateReducer.data
    }
}

export default connect(mapStateToProps)(Leafmap)