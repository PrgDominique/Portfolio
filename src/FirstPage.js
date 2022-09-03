import "./App.css";
import Photo from "./Photo_2.png";
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
           
              <h1>{greet}</h1>
              <h1>Hello I'm Dominique</h1>
              <h1>And I'm Web Developer</h1>
          
          </div>
          <div className="img1">
            
              <img src={Photo} alt="/" className="" />
            
          </div>
        </div>
        
        <div className="container2">
          <div className="Aboutme">
            <div data-aos="fade-down">
               <h1>About me</h1>
            </div>
          </div>
               <div className="text2">
                  <div data-aos="fade-left">
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
