import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import MemoryCard from "./pages/MemoryCard/MemoryCard.page";
import TicTacToe from "./pages/TicTacToe/TicTacToe.page";
import Home from "./pages/Home/Home.page";
import Navbar from "./components/Navbar/Navbar.component";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/memorycard">
            <MemoryCard />
          </Route>
          <Route exact path="/tictactoe">
            <TicTacToe />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
