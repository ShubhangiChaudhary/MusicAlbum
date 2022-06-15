import styles from "../styles/Home.module.css";

export default function Home(){
    return (
      <main>
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
        </div>
      </main>
    );
}