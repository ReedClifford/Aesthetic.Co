import { Route, Routes } from "react-router-dom";
import MainDirectory from "./routes/MainDirectory/MainDirectory";
import Navbar from "./routes/Navbar/Navbar";
import SignIn from "./routes/Sign-In/SignIn";
import SignUp from "./routes/SignUp/SignUp";

const App = () => {
  return (
    <section className="root-container">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<MainDirectory />} />
          <Route path="shop" element={"shop"} />
          <Route path="contact" element={"contact"} />
        </Route>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </section>
  );
};

export default App;
