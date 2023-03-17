import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import Forget from './Components/Forget/Forget';
import NotFound from './Components/NotFound/NotFound';
import Layout from './Components/Layout/Layout'
import Home from './Home';
import Ativos from './Components/Ativos/Ativos'
import Users from './Components/Users/Users'
import Profile from './Components/Profile/Profile'


const App = (props) => {


  const RequireAuth = ({ children }) => {
    if (props.LoggedUser.Email) {
      return children;
    } else {
      return <Navigate to="/" />; 
    }
  };


  const TESTE = () => {
    return <div>TESTE</div>
  }



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home CheckedLogin={props.LoggedUser.CheckedLogin} Email={props.LoggedUser.Email} />} />
        <Route path="/Forget" element={<Forget />} />
        <Route path="/App" element={<RequireAuth> <Layout /> </RequireAuth>}>
          <Route path="/App/Dash" element={<RequireAuth> <TESTE /> </RequireAuth>} />
          <Route path="/App/Ativos" element={<RequireAuth> <Ativos /> </RequireAuth>} />
          <Route path="/App/Profile" element={<RequireAuth> <Profile /> </RequireAuth>} />
          <Route path="/App/Users" element={<RequireAuth> <Users /> </RequireAuth>} />
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
