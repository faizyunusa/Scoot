import React from "react";
import "./project1.css";
import scooter from "./assets/Scooter.png";
function App() {
  return (
    <>
      <div className="project-1">
        <h1><a href="project1.html" className="A-of-all">SCOOT</a></h1>
        <h3 className="About"><a href="project2.html" className="A-of-all">About</a></h3>
        <h3 className="About"><a href="project4.html" className="A-of-all">Locations</a></h3>
        <h3 className="About"><a href="project3.html" className="A-of-all">Careers</a></h3>
        <h3 className="scootin">Get Scootin</h3>
      </div>

      <div className="image"></div>
<img src={scooter} alt="Scooter" />
      <div className="image-text">
        <h1 className="h1">Scooter&nbsp;&nbsp;&nbsp; sharing<br /> made&nbsp;&nbsp; simple</h1>
        <div className="line">&nbsp;</div>
        <p className="p">
          Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities.
          Use our app to locate the nearest bike, unlock it with a tap, and you're away!
        </p>

        <div className="arrow-wrapper">
          <div className="bold-arrow">
            <div className="horizontal-top"></div>
            <div className="vertical"></div>
            <div className="horizontal-bottom"></div>
            <div className="arrowhead"></div>
          </div>
        </div>

        <h3 className="scootin-2">Get Scootin</h3>
      </div>

      <div className="background">&nbsp;</div>

      <div className="the-images">
        <img src="/images/Group 8 (1).svg" alt="" />
        <img src="/images/Group 9 (1).svg" alt="" />
        <img src="/images/Group 10 (1).svg" alt="" />
      </div>

      <div className="the-texts">
        <h2>Locate with app</h2>
        <h2>Pick your scooter</h2>
        <h2>Enjoy the ride</h2>
      </div>

      <div className="mini-texts">
        <p className="mini-texts-p">
          Use the app to find the nearest scooter to you. We are continuously placing scooters in areas with most demand,
          so one should never be too far away.
        </p>

        <p className="mini-texts-p">
          We show the most important info for the scooters closest to you. So you know how much charge they have left and
          can see roughly how much it will cost.
        </p>

        <p className="mini-texts-p">
          Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off!
          Always lock bikes away from walkways and accessibility ramps.
        </p>
      </div>

      <h1 className="h-text">Easy to use riding telemetry</h1>
      <p className="p-text">
        The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.
      </p>

      <img src="/images/Group 33.jpg" alt="" className="image-2" />
      <img src="/images/Group 32.svg" alt="" className="group32" />
      <img src="/images/Mask.jpg" alt="" className="Mask" />

      <h3 className="scootin-3">Learn More</h3>

      <div className="second">
        <img src="/images/Bitmap Copy.jpg" alt="" className="bitman" />

        <h1 className="h11">Coming to a city<br /> near you</h1>

        <p className="group12">
          Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us
          in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.
        </p>

        <h3 className="scootin-4">Learn More</h3>
      </div>

      <h1 className="h-text">Zero hassle payments</h1>
      <p className="p-text">
        Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal
        account inside the app. Need to pay later? No worries! You can defer payment for up to a month.
      </p>

      <img src="/images/Bitmap.jpg" alt="" className="image-3" />
      <img src="/images/Group 17.svg" alt="" className="group17" />
      <img src="/images/Mask.svg" alt="" className="masksvg" />

      <h3 className="scootin-3">Learn More</h3>
      <img src="/images/Group 23.jpg" alt="" className="bottom" />

      <div style={{ float: "right", marginTop: "50px" }}>
        <a href="https://www.apple.com/app-store/"><img src="/images/apple.png" alt="apple" /></a>
        <a href="https://play.google.com/store"><img src="/images/google1.png" alt="google" /></a>
      </div>

      <footer>
        <div className="footer-bottom">
          <div className="below-style">
            <h2 className="h2"><b>scoot</b></h2>
            <li><a href="about.html">About</a></li>
            <li><a href="locations.html">Location</a></li>
            <li><a href="careers.html">Careers</a></li>
          </div>

          <div className="socials">
            <a><i className="fab fa-facebook-f"></i></a>
            <a><i className="fab fa-twitter"></i></a>
            <a><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
