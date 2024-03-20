import "./TripStyles.css";
import Trip1 from "../assets/6.jpg";
import Trip2 from "../assets/9.jpg";
import Trip3 from "../assets/10.jpg";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent trips</h1>
      <p>You can discover unique destination using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="New-Zealand"
          text="New Zealanders, or Kiwis as they are called, have been shaped by their isolation. Today, most Kiwis are no longer farmers, with 86 percent of the population living in cities. More people live in the city of Auckland on North Island, than the whole population of South Island."
        />
        <TripData
          image={Trip2}
          heading="Australia"
          text="New Zealanders, or Kiwis as they are called, have been shaped by their isolation. Today, most Kiwis are no longer farmers, with 86 percent of the population living in cities. More people live in the city of Auckland on North Island, than the whole population of South Island."
        />
        <TripData
          image={Trip3}
          heading="France"
          text="New Zealanders, or Kiwis as they are called, have been shaped by their isolation. Today, most Kiwis are no longer farmers, with 86 percent of the population living in cities. More people live in the city of Auckland on North Island, than the whole population of South Island."
        />
      </div>
    </div>
  );
}

export default Trip;
