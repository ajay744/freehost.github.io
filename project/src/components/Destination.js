import mountain1 from "../assets/1.jpg";
import mountain2 from "../assets/2.jpg";
import mountain3 from "../assets/3.jpg";
import mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination =() =>{
    return(
           <div className="destination">
            <h1>popular destination</h1>
            <p>
                tours give the opportunoty 
            </p>

                 <DestinationData
                 className="first-des"
                 
                 heading="taal volcano,batango"
                 text="
                 aaaaaaaaaaaaaaaaaaaa
                 aaaaaaaaaaaaaaaaaaa
                 aaaaaaaaaaaaaaaaaaa
                 aaaaaaaaaaaaaaaaaaaaa"

                 img1={mountain1}
                 img2={mountain2}
                 
                 />

                <DestinationData
                
                className="first-des-reverse"
                 
                 heading="taal volcano,batango"
                 text="
                 aaaaaaaaaaaaaaaaaaaa
                 aaaaaaaaaaaaaaaaaaa
                 aaaaaaaaaaaaaaaaaaa
                 aaaaaaaaaaaaaaaaaaaaa"

                 img1={mountain1}
                 img2={mountain2}
                 
                 />
        </div>
    )
}
export default Destination;