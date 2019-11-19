import React from "react";
import "./App.css";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header title={this.props.title} />
        <Nav nav={this.props.nav} />
        <Main greeting={this.props.greeting} />
        <Footer />
      </div>
    );
  }
}

export default App;
