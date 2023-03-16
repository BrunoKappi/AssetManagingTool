import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import store from './Config/store/store';
import { useEffect } from 'react';
import { connect } from "react-redux";
import Login from './Components/Login/Login'
import { logout } from './Config/firebase/auth';
import Forget from './Components/Forget/Forget';
import NotFound from './Components/NotFound/NotFound';
import Layout from './Components/Layout/Layout'

function Acesso() {
  return <div>
    <div>Acesso</div>
    <button onClick={logout}>Logof</button>
  </div>;
}






const App = (props) => {


  const RequireAuth = ({ children }) => {
    if (props.LoggedUser.Email) {
      return children;
    } else {
      return <Navigate to="/" />;
    }
  };


  const Home = () => {
    if (props.LoggedUser.Email) {
      return <Navigate to="/App" />;
    } else {
      return <Login />;
    }
  };


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Forget" element={<Forget />} />
        <Route path="/App" element={<RequireAuth> <Layout /> </RequireAuth>}>
          <Route path="/App/Teste" element={<RequireAuth> <Acesso /> </RequireAuth>} />
          <Route path="*" element={<RequireAuth> <NotFound /> </RequireAuth>} />

        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

const ConnectedApp = connect((state) => {
  return {
    LoggedUser: state.LoggedUser
  };
})(App);

export default ConnectedApp;
