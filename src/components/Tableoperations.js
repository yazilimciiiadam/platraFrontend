import React from "react"
import "../style/operationsStyle.css"
import { connect } from "react-redux"
import {getOperation} from "../actions"



class Tableoperations extends React.Component {

    constructor() {
        super()
        this.state = {
            longitude: 0,
            latitude: 0,
            velocity: 0,
            searchInput: "",
        }
        this.handleRangeSlider = this.handleRangeSlider.bind(this)
        this.handleFilter = this.handleFilter.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleSorting = this.handleSorting.bind(this)

    }

    handleSorting(event) {
        this.props.getOperation(this.sortData(event.target.text))
    }
    handleRangeSlider(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }

        )
    }

    handleFilter() {

        this.props.getOperation(this.filterData())

    }
    handleSearch(event) {

        if (event.target.name === "searchInput") {
            this.setState({
                searchInput: event.target.value
            })
        }
        else {
            this.props.getOperation(this.searchData())
        }

    }


    filterData() {
        const filteredData = this.props.data.states.filter(item => {

            if (this.state.latitude === 0) {
                if (this.state.longitude === 0) {
                    if (this.state.velocity === 0) {

                        return null

                    }
                    else {
                        return item[9] < this.state.velocity
                    }
                }
                else {
                    if (this.state.velocity === 0) {

                        return (this.state.longitude < 0 ? (item[5] < 0 && item[5] > this.state.longitude) : (item[5] > 0 && item[5] < this.state.longitude))
                    }
                    else {

                        return (this.state.longitude < 0 ? (item[5] < 0 && item[5] > this.state.longitude && item[9] < this.state.velocity) : (item[5] > 0 && item[5] < this.state.longitude && item[9] < this.state.velocity))

                    }

                }
            }
            else {
                if (this.state.longitude === 0) {
                    if (this.state.velocity === 0) {

                        return (this.state.latitude < 0 ? (item[6] < 0 && item[6] > this.state.latitude) : (item[6] > 0 && item[6] < this.state.latitude))

                    }
                    else {
                        return (this.state.latitude < 0 ? (item[6] < 0 && item[6] > this.state.latitude && item[9] < this.state.velocity) : (item[6] > 0 && item[6] < this.state.latitude && item[9] < this.state.velocity))
                    }
                }
                else {
                    if (this.state.velocity === 0) {
                        return (this.state.latitude < 0 ? (item[6] < 0 && item[6] > this.state.latitude && (this.state.longitude < 0 ? (item[5] < 0 && item[5] > this.state.longitude) : (item[5] > 0 && item[5] < this.state.longitude))) : (item[6] > 0 && item[6] < this.state.latitude && (this.state.longitude < 0 ? (item[5] < 0 && item[5] > this.state.longitude) : (item[5] > 0 && item[5] < this.state.longitude))))

                    }
                    else {
                        return (this.state.latitude < 0 ? (item[6] < 0 && item[6] > this.state.latitude && (this.state.longitude < 0 ? (item[5] < 0 && item[5] > this.state.longitude) : (item[5] > 0 && item[5] < this.state.longitude)) && item[9] < this.state.velocity) : (item[6] > 0 && item[6] < this.state.latitude && (this.state.longitude < 0 ? (item[5] < 0 && item[5] > this.state.longitude) : (item[5] > 0 && item[5] < this.state.longitude)) && item[9] < this.state.velocity))

                    }

                }

            }

        })
        return filteredData
    }

    searchData() {

        const searchedData = this.props.data.states.filter(item => {

            let sentence = item[1] + "" + item[2] + "" + item[3] + "" + item[4] + "" + item[5] + "" + item[6] + "" + item[9]


            return this.state.searchInput.length > 0 ? sentence.toLowerCase().includes(this.state.searchInput.toLowerCase()) : null
        })

        return searchedData

    }

    sortData(value) {


        if (value === "Country") {



            return this.props.data.states.sort(function (a, b) {
                if (a[2]> b[2])
                    return 1;
                else if (a[2] < b[2])
                    return -1;
                else
                    return 0;
            });

        }
        else if (value === "Longitude") {

            return this.props.data.states.sort(function (a, b) {
                return a[5] - b[5];
            });

        }
        else if (value === "Latitude") {

            return this.props.data.states.sort(function (a, b) {
                return a[6] - b[6];
            });

        }
        else if (value === "Velocity") {

            return this.props.data.states.sort(function (a, b) {
                return a[9] - b[9];
            });

        }
    }
    handleRefresh(){
        window.location.reload();
    }



    render() {
        return (
            <div className="row justify-content-center operationContainer">
                <div className="dropdown" >
                    <button className="btn operationButton dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-sort-alpha-down"></i> Sırala
                         </button>
                    <div className="dropdown-menu sortingContainer" aria-labelledby="dropdownMenuButton">

                        <a onClick={this.handleSorting} className="dropdown-item text-center">Country</a>
                        <a onClick={this.handleSorting} className="dropdown-item text-center">Longitude</a>
                        <a onClick={this.handleSorting} className="dropdown-item text-center">Latitude</a>
                        <a onClick={this.handleSorting} className="dropdown-item text-center">Velocity</a>

                    </div>
                </div>

                <div className="dropdown" >
                    <button className="btn operationButton dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fab fa-searchengin"></i> Filtrele
                    </button>
                    <div className="dropdown-menu filterContainer" aria-labelledby="dropdownMenuButton">
                        <div>
                            <form>
                                <div className="form-group">
                                    <label className="sliderText">Latitude</label>
                                    <input onChange={this.handleRangeSlider} type="range" className="form-control-range rangeSlider" id="formControlRange" max="90" min="-90" name="latitude" value={this.state.latitude} /><span className="rangeValue">{this.state.latitude}</span>
                                </div>
                            </form>
                        </div>

                        <div>
                            <form>
                                <div className="form-group">
                                    <label className="sliderText">Longitude</label>
                                    <input onChange={this.handleRangeSlider} type="range" className="form-control-range rangeSlider" id="formControlRange" max="180" min="-180" name="longitude" value={this.state.longitude} /><span className="rangeValue">{this.state.longitude}</span>
                                </div>
                            </form>
                            <form>
                                <div className="form-group">
                                    <label className="sliderText">Velocity</label>
                                    <input onChange={this.handleRangeSlider} type="range" className="form-control-range rangeSlider" id="formControlRange" max="400" min="0" name="velocity" value={this.state.velocity} /><span className="rangeValue">{this.state.velocity}</span>
                                </div>
                            </form>
                            <button onClick={this.handleFilter} className="btn applyButton" type="button">Uygula</button>
                        </div>
                    </div>
                </div>

                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Arama yap.." aria-label="Search" onChange={this.handleSearch} name="searchInput" />
                    <button onClick={this.handleSearch} className="btn btn-outline-success my-2 my-sm-0" type="button"><i className="fas fa-search" name="searchButton"></i></button>
                </form>
                <button onClick={this.handleRefresh} type="button" className="btn appButton"><i className="fas fa-redo"></i> Yenile</button>
            </div >
        )
    }

}

function mapStateToProps(state) {


    return {

        data: state.getUpdateReducer.data
    }

}

export default connect(mapStateToProps, {getOperation})(Tableoperations)