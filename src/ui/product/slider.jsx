import React  from 'react';

import {BASE_URL} from "../../services/base_url.js";


const Slider = ({image}) => {
    return (
        <div id="carouselExampleControls" className="carousel slide col-md-12" style={{height: "250px"}} data-ride="carousel">
            <div className="carousel-inner"  >
                <div className="carousel-item active" >
                    <img style={{width: '300px'}} className="d-block "
                         src={`${BASE_URL}/${image && image[0]}`}
                         alt="Maxsulot rasmi"
                         />
                </div>

                {image && image.map((image, index) => (
                    <div key={index} className="carousel-item" style={{heigth: "250px"}}>
                        <img style={{width: '250px'}} className="d-block "
                             src={`${BASE_URL}/${image}`}
                             alt="First slide"/>
                    </div>
                ))}


            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
               data-slide="prev">
                <span style={{backgroundColor: "black"}} className="carousel-control-prev-icon"
                      aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button"
               data-slide="next">
                <span style={{backgroundColor: "black"}} className="carousel-control-next-icon"
                      aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}


export default Slider;