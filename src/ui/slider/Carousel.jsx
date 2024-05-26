import React from "react";
import style from "./Carousel.module.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


 export function CarouselItems(props) {
  return (
    <div style={{margin: '20px'}}>
          <Carousel  autoPlay={true} interval={6000} showThumbs={false} infiniteLoop={true} >
    <div>
        <img src="https://ucarecdn.com/368a829f-2b34-479c-a3f9-dc5601e3bf65/-/preview/1000x222/" />
    </div>
    <div>
        <img src="https://ucarecdn.com/368a829f-2b34-479c-a3f9-dc5601e3bf65/-/preview/1000x222/" />
    </div>
    <div>
        <img src="https://ucarecdn.com/368a829f-2b34-479c-a3f9-dc5601e3bf65/-/preview/1000x222/" />
    </div>
    <div>
        <img src="https://ucarecdn.com/368a829f-2b34-479c-a3f9-dc5601e3bf65/-/preview/1000x222/" />
    </div>

</Carousel>

    </div>

  );
}
