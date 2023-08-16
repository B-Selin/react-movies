import "../../pages/MoviePage/MoviePage.css";


// ActorCard component is exported as the default export. It accepts a prop called actor which will be the name of the actor

// getRandomNumber function generates a random number between min and max
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export default function ActorCard({ actor }) {
  let num = getRandomNumber(250, 400);

  return (
    <div
      // The background image is set dynamically using a template literal to insert the random num variable into the image URL
      style={{
        background: `url(https://picsum.photos/${num}) no-repeat center center`,
        WebkitBackgroundSize: "cover"
      }}
      className="item-card"
    >
      <div className="title">
        <h1>{actor}</h1>
      </div>
    </div>
  );
}


