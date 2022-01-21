import {Switch, Route} from "react-router-dom";
import {Home} from "pages";
import {Suporte} from "pages";
import {Forum} from 'pages';
import {Premium} from 'pages';
import { Planos } from "pages";
import { Login } from "pages";

const Routes = () =>{
    return (<Switch>
        <Route path="/login" component = {Login} />;
        <Route path="/suporte" component = {Suporte} />
        <Route path="/forum" component = {Forum} />
        <Route path="/premium" component = {Premium} />
        <Route path="/planos" component = {Planos} />
        <Route path="//" component = {Home} />
    </Switch>)
}
export default Routes;