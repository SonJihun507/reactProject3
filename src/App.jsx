import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Provider } from "react-redux";
import store from "./redux/store";
import Join from "./pages/Join";
import Login from "./pages/Login";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Header";
import First from "./pages/First";
import Myprofile from "./pages/Myprofile";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/Loginpage" />;
};

const PublicRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? <Element {...rest} /> : <Navigate to="/Fistpage" />;
};

function App() {
  return (
    <>
      <AuthProvider>
        <Provider store={store}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route
                path="/Firstpage"
                element={<PublicRoute element={First} />}
              />
              <Route
                path="/Joinpage"
                element={<PublicRoute element={Join} />}
              />
              <Route
                path="/Loginpage"
                element={<PublicRoute element={Login} />}
              />
              <Route path="/" element={<PrivateRoute element={Home} />} />
              <Route
                path="/MyProfile"
                element={<PrivateRoute element={Myprofile} />}
              />
              <Route
                path="/detail/:id"
                element={<PrivateRoute element={Detail} />}
              />
            </Routes>
          </BrowserRouter>
        </Provider>
      </AuthProvider>
    </>
  );
}

export default App;
