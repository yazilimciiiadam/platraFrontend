import React from "react"

class Loading extends React.Component {

    render() {

        
        return (
            <div className="row justify-content-center m-5">
                <div className="col-2 text-center">
                    <div className="spinner-grow text-success" role="status" >
                    </div>
                    
                </div>
                

            </div>
        )

    }


}
export default Loading