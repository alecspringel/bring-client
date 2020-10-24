import React from "react";
import Form from "./components/form/Form";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container margin-t20">
        <Form />
      </div>
    </div>
  );
}

export default App;
