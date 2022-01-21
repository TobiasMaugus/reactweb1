import {BrowserRouter} from 'react-router-dom';
import Routes from 'routes';
import GlobalStyle from 'styles/GlobalStyle';
import {ToastContainer} from "react-toastify"

function App() {
  return(
  <BrowserRouter>
    <GlobalStyle/>
    <ToastContainer autoClose={3000}/>
    <Routes/>
  </BrowserRouter>);
}

export default App;
 