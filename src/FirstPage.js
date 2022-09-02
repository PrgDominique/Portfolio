import "./App.css";
import Photo from "./Photo_2.png";
import Fade from "react-reveal/Fade";
import aos from "aos";
import "aos/dist/aos.css";

aos.init();

const Deyt = new Date();
const Hour = Deyt.getHours();
let greet = "";

if (Hour < 12) {
  greet = "Good Morning!";
} else if (Hour < 18) {
  greet = "Good Afternoon!";
} else {
  greet = "Good Evening!";
}

function FirstPage() {
  return (
    <>
      <div className="containerfull scrollbar-hidden scrollbar-hidden">
        <div className="container1">
          <div className="text1">
            <Fade left>
              <h1>{greet}</h1>
              <h1>Hello I'm Dominique</h1>
              <h1>And I'm Web Developer</h1>
            </Fade>
          </div>
          <div className="img1">
            <Fade right>
              <img src={Photo} alt="/" className=" " />
            </Fade>
          </div>
        </div>
        <div className="container2">
          <div className="Aboutme">
            <div data-aos="fade-up" data-aos-anchor-placement="bottom-center">
              <h1>About me</h1>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="bottom-center">
            <div className="text2">
              <p>
                I'm enthusiastic and adventurous. I'm not staying in my comfort
                zone which gives me some advantage in this field. Every day new
                knowledge and I won't stop learning because It's fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstPage;
