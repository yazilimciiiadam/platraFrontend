import React from "react"

class Nodata extends React.Component {

    render() {

        
        return (
            <div className="row justify-content-center m-5">
                <div className="col-4 text-center">
                <i class="far fa-meh-rolling-eyes fa-7x"></i>
                <h1>Üzgünüm sonuç bulamadım...!</h1>
                <h6>Ana sayfaya yönlendiriliyorsunuz...</h6>
                {setTimeout(() => window.location.reload(), 5000)}
                </div>

                
                

            </div>
        )

    }


}
export default Nodata