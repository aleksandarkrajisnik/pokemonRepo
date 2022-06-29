import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AuthProvider from "./authContext";
import DataProvider from "./dataContext";
import PrivateRoute from "./PrivateRoute";
import Home from "./pages/Home";
import PokeInfo from "./pages/PokeInfo";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <DataProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route element={<Home />} path="/" />
                <Route element={<PokeInfo />} path="/:name" />
              </Route>
              <Route element={<Login />} path="/login" />
            </Routes>
          </BrowserRouter>
        </DataProvider>
      </AuthProvider>
    </Provider>
  );
}

export default App;
