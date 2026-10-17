import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Folder the site is served from: "/" on Lovable, "/karls-personal-portfolio/" on GitHub Pages.
const basename = import.meta.env.BASE_URL.replace(/\/+$/, "") || "/";

const App = () => (
  <BrowserRouter basename={basename}>
    <Routes>
      <Route path="/" element={<Home lang="fr" />} />
      <Route path="/en" element={<Home lang="en" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
