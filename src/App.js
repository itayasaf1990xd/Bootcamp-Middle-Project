import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import MemoryCard from "./pages/MemoryCard/MemoryCard.page";

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <MemoryCard />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
