import Footer from "../Footer/Footer";
import Happenings from "./Happenings/Happenings";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";

const DefaultPage = () => {
  return (
    <div className="App">
      <section id="home">
        <Home />
      </section>
      <section id="menu">
        <Menu />
      </section>
      <section id="happenings">
        <Happenings />
      </section>
      <Footer />
    </div>
  );
};

export default DefaultPage;
