import Navbar from "../components/NavBar/Navbar";
import Socialicons from "../components/SocailIcons/Socialicons";
import Typingeffect from "../components/Typingtexteffect/Typingeffect";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <Socialicons />
      <div className="container-fluid">
        <div className="hmpage-cont">
          <div className="banner-cnt">
            <div className="banner-left">
              <Typingeffect />
            </div>
            <div className="banner-right">
              <div className="img-div bg-img"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
