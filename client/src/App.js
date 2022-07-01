import Authentification from "./pages/javascripts/Authentification";
import Users from "./pages/javascripts/Users";
import RequireAuth from "./components/RequireAuth";
import { Routes, Route } from "react-router-dom";
import LayoutOutlet from "./components/LayoutOutlet";
import Home from "./pages/javascripts/Home";
import Groupes from "./pages/javascripts/Groupes";
import Login from "./components/auth/Login";
import News from "./pages/javascripts/News";
import Network from "./pages/javascripts/Network";
import Container from "./components/container/Container";
import Register from "./components/auth/Register";
import Chat from "./pages/javascripts/Chat";
import Notifications from "./pages/javascripts/Notifications";

function App() {
  return (
  <Routes>
        <Route path="/" element={<LayoutOutlet />}>
          {/* Public Routes */}
          <Route path="authentification" element={<Authentification />}>
            <Route path="login" element={<Login />}>
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="news" element={<News />} />
          </Route>
          {/* Prtected Routes */}
          <Route element={<RequireAuth allowedRoles={[1022]} />}>
            <Route path="" element={<Container />}>
              <Route path="/" element={<Home />} />
              <Route path="chat" element={<Chat />} />
              <Route path="groupes" element={<Groupes />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="network" element={<Network />} />
              <Route path="users" element={<Users />} />
            </Route>
          </Route>
        {/* <Route path="*" element={<Missing />} /> */}
        </Route>
      </Routes>
  );
}

export default App;
