import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano,Batangas"
        text="Once a melting pot for trade and agriculture, with ships coming in
      from Manila, the Visayan islands and abroad, Taal has experienced
      days of economic glory. She hailed as one of the most prosperous and
      influential towns in the Philippines for over two hundred years.
      Through the centuries, Taal has mercilessly struggled and has been
      ripped asunder by wars, famine and a series of catastrophic
      calamities. However, the townspeople always rose like resilient
      phoenixes destined for greater heights."
        image1={Mountain1}
        image2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul,Batangas"
        text="Once a melting pot for trade and agriculture, with ships coming in
      from Manila, the Visayan islands and abroad, Taal has experienced
      days of economic glory. She hailed as one of the most prosperous and
      influential towns in the Philippines for over two hundred years.
      Through the centuries, Taal has mercilessly struggled and has been
      ripped asunder by wars, famine and a series of catastrophic
      calamities. However, the townspeople always rose like resilient
      phoenixes destined for greater heights."
        image1={Mountain3}
        image2={Mountain4}
      />
    </div>
  );
};

export default Destination;
