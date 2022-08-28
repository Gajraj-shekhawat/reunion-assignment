import Navbar from "./components/Navbar";
import AllRoutes from "./routes/AllRoutes";
import styles from "./styles/app.module.css"

function App() {
  return (
  <div className={styles.containerBox}>
  <Navbar />
  <AllRoutes/>

  
  </div>
  );
}

export default App;
