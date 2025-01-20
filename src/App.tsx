import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { BASE_URL_PATH, GAME_URL_PATH, HOME_URL_PATH } from './constants/UrlPaths';
import { GamePage } from './pages/GamePage';
import { HomePage } from './pages/HomePage';

export default function App() {
  return (
    <Router basename={BASE_URL_PATH}>
      <Routes>
        <Route path={HOME_URL_PATH} element={<HomePage />} />
        <Route path={GAME_URL_PATH} element={<GamePage />} />
      </Routes>
    </Router>
  );
}
