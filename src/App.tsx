import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import BeforeVote from "./pages/before-vote/before-vote";
import DuringVote from "./pages/during-vote/during-vote";
import AfterVote from "./pages/after-vote/after-vote";
import InvolvedPeople from "./pages/involved-people/involved-people";
import HomePage from "./pages/home/home";
import { paths } from "./routes/paths";

function App() {
  return (
    <>
      <HashRouter basename="/">
        <Routes>
          <Route path={paths.home} Component={HomePage} />
          <Route path={paths.involvedPeople} Component={InvolvedPeople} />
          <Route path={paths.beforeVote} Component={BeforeVote} />
          <Route path={paths.duringVote} Component={DuringVote} />
          <Route path={paths.afterVote} Component={AfterVote} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
