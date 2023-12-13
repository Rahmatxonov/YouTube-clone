import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./sass/main.scss";
import HomePage from "./pages/HomePage";
import Trending from "./pages/Trending";
import Subsciptions from "./pages/Subscriptions";
import Library from "./pages/Library";
import History from "./pages/History";
import WatchLater from "./pages/WatchLeter";
import Favourites from "./pages/Favourites";
import LikedVideos from "./pages/LikedVideos";
import Music from "./pages/Music";
import Games from "./pages/Games";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/subscription" element={<Subsciptions />} />
          <Route path="/library" element={<Library />} />
          <Route path="/history" element={<History />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/likedvideos" element={<LikedVideos />} />
          <Route path="/music" element={<Music />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
