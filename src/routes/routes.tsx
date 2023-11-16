import { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { paths } from './paths';

const Home = lazy(() => import('../pages/home/home'));
const InvolvedPeople = lazy(() => import('../pages/involved-people/involved-people'));
const BeforeVote = lazy(() => import('../pages/before-vote/before-vote'));
const DuringVote = lazy(() => import('../pages/during-vote/during-vote'));
const AfterVote = lazy(() => import('../pages/after-vote/after-vote'));

const AppRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.involvedPeople} element={<InvolvedPeople />} />
          <Route path={paths.beforeVote} element={<BeforeVote />} />
          <Route path={paths.duringVote} element={<DuringVote />} />
          <Route path={paths.afterVote} element={<AfterVote />} />
    </Routes>
  );
};

export default AppRoutes;
