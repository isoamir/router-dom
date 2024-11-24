
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="main" >
      <div className="main2" >
        <img className="img2" src="../src/assets/Group 183.png" alt="" />
        <div>
          <h1 className="h1" >Quality <span>Education</span> By Any Means <br /> Necessary.</h1>
          <button className="btn" >Get Started</button>
        </div>
        </div>
        <div className="Navbar" >
            <img src="../src/assets/Frame 6519.png" alt="" />
            <img src="../src/assets/Frame 6520.png" alt="" />
            <img src="../src/assets/Frame 6522.png" alt="" />
          <img src="../src/assets/Frame 6524.png" alt="" />
          <img src="../src/assets/Frame 6524 (1).png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
