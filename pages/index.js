import styles from "../styles/Home.module.css";
import script from "next/script"

export default function Home(){
    return (
      <main className={styles.home}>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <div className={styles.logo}>
              <h1>gAAnA</h1>
            </div>
            <ul>
              <li>
                <a href="/" className={styles.active}>
                  HOME
                </a>
              </li>
              <li>
                <a href="">ARTISTS</a>
              </li>
              <li>
                <a href="">ALBUM</a>
              </li>
              <li>
                <a href="">ABOUT</a>
              </li>
              <li>
                <a href="">REVIEWS</a>
              </li>
            </ul>
          </div>

          <div className={styles.content}>
            <div className={styles.left_col}>
              <h2>
                <span>Music...</span>
                <br /> Strongest Form Of <span>Magic.</span>
              </h2>
            </div>
            <div className={styles.lines}>
              <p>
                Isn't it Funny??
                <br />
                Knowing, Just How Fast The
                <br />
                <span> Night Changes!!</span>
              </p>
              <h1>- One Direction</h1>
            </div>
            <div className={styles.right_col}>
              <p>Click Here To Listen!!</p>
              <img src="images/play.png" id={styles.icon}/>
            </div>
          </div>
        </div>

        
      </main>
    );

    // <audio id="mySong">
    //     <source src="../public/songs/Night-Changes.mp3" type="audio/mp3"/>
    // </audio>
    // var mySong = document.getElementById("mySong");
    // var icon = document.getElementById("icon");

    // icon.onclick = function () {
    //   if (mySong.paused) {
    //     mySong.play();
    //     icon.src = "images/pause.png";
    //   } else {
    //     mySong.pause();
    //     icon.src = "images/play.png";
    //   }
    // };
}