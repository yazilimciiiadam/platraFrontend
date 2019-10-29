import React from "react"
import "../style/headerStyle.css"
import logo from "../img/PLATRA.png"

class Header extends React.Component{

    render(){
        return(

            <div className = "container-fluid headerContainer">
                <div className="row justify-content-center">
                    <div className="col-3 text-center"><img src={logo} height="290" width="290" alt="Platra Logo"/></div>
                    
                </div>
                
            </div>
        )
    }

}

export default Header