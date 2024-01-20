import AilImage from "./images/avatar-ali.png";
import AnishaImage from "./images/avatar-anisha.png";
import RichardImage from "./images/avatar-richard.png";
import ShanaiImage from "./images/avatar-shanai.png";
import ImageSlider from "./ImageSlider"; // Import ImageSlider component
import CardComponent from "./CardConponent";
import "./MovingImages.css";

export function MovingImages() {
  const slides = [
    {
      image: AnishaImage,
      name: "Anisha Li",
      description:
        "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    },
    {
      image: AilImage,
      name: "Ali Bravo",
      description:
        "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
    },
    {
      image: RichardImage,
      name: "Richard Watts",
      description:
        "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
    },
    {
      image: ShanaiImage,
      name: "Shanai Gough",
      description:
        "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
    },
  ];

  return (
    <div className="moving-image-container">
      <h1 className="title">What they've said</h1>
      {/*Desktop Component */}
      <CardComponent slides={slides} />
      <ImageSlider slides={slides} /> {/*Mobile Component */}
      <button className="get-started-button">Get Started</button>
    </div>
  );
}
