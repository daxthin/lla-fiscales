import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import BeforeVote from "./pages/before-vote/before-vote";
import DuringVote from "./pages/during-vote/during-vote";
import AfterVote from "./pages/after-vote/after-vote";
import InvolvedPeople from "./pages/involved-people/involved-people";
import HomePage from "./pages/home/home";
import { paths } from "./routes/paths";
import CertificadoDeEscrutinio from "./pages/certificado-de-escrutinio/certificado-de-escrutinio";
import CommonCheats from "./pages/common-cheats/common-cheats";
import Denunciar from "./pages/denunciar/denunciar";
import BolestasYDocValidos from "./pages/boletas-y-doc-validos/boletas-y-doc-validos";

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
          <Route path={paths.certDeEscrutinio} Component={CertificadoDeEscrutinio} />
          <Route path={paths.commonCheats} Component={CommonCheats} />
          <Route path={paths.denunciar} Component={Denunciar} />
          <Route path={paths.boletasYDocValidos} Component={BolestasYDocValidos} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
