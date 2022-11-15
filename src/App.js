import { Route, Routes } from "react-router-dom";

import Checkout from "./routes/Checkout/Checkout";
import MainDirectory from "./routes/MainDirectory/MainDirectory";
import Navbar from "./routes/Navbar/Navbar";
import Shop from "./routes/Shop/Shop";
import SignIn from "./routes/Sign-In/SignIn";
import SignUp from "./routes/SignUp/SignUp";
const App = () => {
  return (
    <section className="root-container">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<MainDirectory />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="contact" element={"contact"} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={"This page doesnt exist"} />
      </Routes>
    </section>
  );
};

export default App;
