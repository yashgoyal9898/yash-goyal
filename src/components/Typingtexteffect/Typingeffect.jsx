import Typewriter from "typewriter-effect";
import "./Typingeffect.css";

function Typingeffect() {
  return (
    <div className="typing-text">
      <h2>Yash Goyal</h2>
      <h3>
        {" "}
        <Typewriter
          options={{
            strings: ["Frontend Developer", "Wordpress Developer"],
            autoStart: true,
            loop: true,
            delay: 200,
            pauseFor: 300,
          }}
        />{" "}
      </h3>
    </div>
  );
}

export default Typingeffect;
