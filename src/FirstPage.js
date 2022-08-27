import "./App.css";
import Photo from './Photo_2.png'
import Fade from 'react-reveal/Fade'
import aos from 'aos'
import 'aos/dist/aos.css'

aos.init();

const Deyt = new Date()
const Hour = Deyt.getHours()
let greet =""

if(Hour < 12){
  greet = "Good Morning!"
}
else if(Hour < 18){
  greet = "Good Afternoon!"
} else {
  greet = "Good Evening!"
}


function FirstPage() {

  return (
    <>
    
      <div className="w-full h-screen bg-[#0f0e17] flex justify-between p-0 m-0 scrollbar-hidden scrollbar-hidden1 ">
        <Fade left>
      <div className="font-Serif absolute text-[#fffffe] bottom-0 text-[3.2vh]  px-[5vh] py-[60vh] space-y-4
      xs:text-[3.2vh]  xs:px-[5vh] xs:py-[60vh] xs:space-y-4
      sm:text-[5vh] sm:px-[13vh]
      c3:text-[2vh]
      md:text-[6vh] md:px-[15vh] md:py-[50vh]
      lg:text-[5vh] lg:px-[5vh] lg:py-[40vh]
      xl:text-[7vh] xl:px-[15vh] xl:py-[40vh]
       ">
        <h1>{greet}</h1>
        <h1>Hello I'm Dominique</h1>
        <h1>And I'm Web Developer</h1>
      </div>
      </Fade>
      <Fade right>
      <div className=" absolute bottom-0 
      xs:px-[5vh] xs:py-[25vh]
      sm:px-[20vh] sm:py-[20vh]
      md:px-[25vh] md:py-[10vh]
      lg:left-[70vh] lg:p-0 lg:py-[30vh]
      xl:left-[110vh] xl:p-0 xl:py-[30vh] 
       ">
    <img src={Photo} alt="/" className="w-auto
    xs:h-[23vh]
    sm:h-[25vh] 
    lg:h-[30vh]
    xl:h-[35vh]
     "/>
    </div>
    </Fade>
  </div>
  <div className="w-full h-screen bg-[#0f0e17] flex justify-between p-0 m-0 scrollbar-hidden scrollbar-hidden1 ">
  


    <div className="font-Serif absolute text-[#fffffe] bottom-0 
    xl:left-[70vh] xl:top-[105vh] xl:text-[8vh]
    ">
  <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-center">
    <h1>About me</h1>
    </div>
    </div>
  </div>

    </>
  );
}

export default FirstPage;
