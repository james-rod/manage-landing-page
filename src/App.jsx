import { Header } from "./Header";
import { ContentComponent } from "./ContentComponent";
import { MovingImages } from "./MovingImages";
import { Footer } from "./Footer";

import TabletImg from "./images/bg-tablet-pattern.svg";
import SimplifyImg from "./images/bg-simplify-section-mobile.svg";
import "./styles.css";

function App() {
  return (
    <main>
      <img src={TabletImg} alt="TabletImg" className="tabletImg" />
      <img src={TabletImg} alt="TabletImg" className="smallTabletImg" />
      <img src={SimplifyImg} alt="SimplifyImg" className="simplifyImg" />
      <Header />
      <ContentComponent />
      <MovingImages />
      <Footer />
    </main>
  );
}

export default App;
