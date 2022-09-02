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
      <div className="w-full h-screen bg-[#0f0e17] flex flex-row flex-wrap  scrollbar-hidden scrollbar-hidden1
       main:py-[30vh]
       d11:py-[30vh]
       d12:py-[30vh]
       d13:py-[30vh]
       d15:py-[30vh]
       d16:py-[30vh]
       d19:py-[30vh]
      ">
        <Fade left>
          <div className=" font-Serif text-[#fffffe] 
          main:pt-[7vh] main:text-5xl main:pl-[15vh] main:leading-tight
          d11:pt-[7vh] d11:pl-[15vh] d11:leading-tight d11:text-4xl
          d12:pt-[7vh] d12:pl-[15vh] d12:leading-tight d12:text-5xl
          d13:pt-[7vh] d13:pl-[15vh] d13:leading-tight d13:text-5xl
          d15:pt-[7vh] d15:pl-[15vh] d15:leading-tight d15:text-5xl
          d16:pt-[7vh] d16:pl-[15vh] d16:leading-tight d16:text-5xl
          d19:pt-[7vh] d19:pl-[15vh] d19:leading-tight d19:text-5xl
          ">
            <h1>{greet}</h1>
            <h1>Hello I'm Dominique</h1>
            <h1>And I'm Web Developer</h1>
          </div>
        </Fade>
        <Fade right>
          <div className="
          d11:pl-[25vh]
          d12:pl-[20vh]
          d13:pl-[25vh]
          d15:pl-[37vh]
          d16:pl-[37vh]
          d19:pl-[60vh]
          ">
            <img src={Photo} alt="/"
            className=" 
            d11:h-[35vh]
            d12:h-[40vh]
            d19:h-[30vh]
            " />
          </div>
        </Fade>
      </div>
      <div className="w-full h-screen bg-[#0f0e17] flex flex-col flex-wrap px-[10vh] py-[10vh] items-center scrollbar-hidden scrollbar-hidden1 ">
        <div
          className="font-Serif absolute text-[#fffffe]
          
    "
        >
          <div data-aos="fade-up" data-aos-anchor-placement="bottom-center">
            <h1>About me</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstPage;
