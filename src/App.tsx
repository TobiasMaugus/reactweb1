import {BrowserRouter} from 'react-router-dom';
import Routes from 'routes';
import GlobalStyle from 'styles/GlobalStyle';
import {ToastContainer} from "react-toastify"
import {AuthProvider} from "hooks/auth";

function App() {
  return(
  <BrowserRouter>
    <GlobalStyle/>
    <ToastContainer autoClose={3000}/>
    <AuthProvider>
    <Routes/>
    </AuthProvider>
  </BrowserRouter>);
}

export default App;
 