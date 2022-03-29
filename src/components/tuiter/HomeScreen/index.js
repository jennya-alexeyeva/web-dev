import TuitList from "../tuit-list";
import WhatsHappening from "./whats-happening";
import "./home-screen.css";

const HomeScreen = () => {
  return(
      <div>
        <WhatsHappening />
        <TuitList />
      </div>
  )
}
export default HomeScreen;