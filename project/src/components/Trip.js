import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/6.jpg";
import Trip3 from "../assets/8.jpg";
function Trip(){
    return(
        <div className="trip">
            <h1>recent tips</h1>
            <p>you can discover unique destination using goole maps</p>
            <div className="tripcard">

                <TripData
                image={Trip1 }
                heading="trip in indonesia"
                text="
                bbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbb"
                />

               <TripData
                image={Trip2 }
                heading="trip in india"
                text="
                bbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbb"
                />

                 <TripData
                image={Trip3 }
                heading="trip in dubai"
                text="
                bbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbb"
                />

            </div>
        </div>
    )
}

export default Trip;