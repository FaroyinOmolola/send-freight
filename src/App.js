import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Route exact path="/" component={HomePage} />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
