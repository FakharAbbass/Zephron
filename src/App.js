import "./App.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Component/Navbar";
import Benefits from "./Component/Benefits";
import ModernDetail from "./Component/ModernDetail";
import Services from "./Component/Services";
import Bugs from "./Component/Bugs";
import Form from "./Component/Form";
import Footer from "./Component/Footer";
import Detail from "./Component/Detail";
function App() {
  return (
    <>
      <section className="main">
        <Navbar></Navbar>
        <Detail></Detail>
      </section>
      <Benefits></Benefits>
      <ModernDetail></ModernDetail>
      <Services></Services>
      <Bugs></Bugs>
      <Form></Form>
      <Footer></Footer>;
    </>
  );
}

export default App;
