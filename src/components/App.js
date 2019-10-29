import React from "react"
import { connect } from "react-redux"
import { showData } from "../actions"
import Table from "./Table"
import Header from "./Header"
import Leafmap from "./Leafmap"
import "../style/appStyle.css"


class App extends React.Component {


    changeView() {
        console.log("Initial State goes to change:" + this.props.isMap)
        this.props.showData(this.props.isMap)
    }



    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row justify-content-start">
                        <button onClick={() => this.changeView()} type="button" className="btn appButton"><i className="far fa-paper-plane"></i> {this.props.buttonText}</button>
                    
                    </div>
                </div>

                <br />
                <br />
                <br />
                {this.props.isMap ? <Leafmap /> : <Table />}
            </div>

        )
    }

}

function mapStateToProps(state) {



    return {
        isMap: state.viewReducer.isMap,
        buttonText: state.viewReducer.buttonText
    }
}

export default connect(mapStateToProps, { showData })(App)
