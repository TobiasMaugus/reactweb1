import {Switch, Route} from "react-router-dom";
import {Home} from "pages";
import {Suporte} from "pages";
import {Forum} from 'pages';
import {Premium} from 'pages';
import { Planos } from "pages";
import { Login } from "pages";
import { Register } from "pages";
import { AdmForuns } from "pages/Adm";

import { PrivateRoute } from "./PrivateRoute";

const Routes = () =>{
    return (<Switch>

        <PrivateRoute path="/adm" exact component={AdmForuns}/>

        <Route path="/login" exact component = {Login} />;
        <Route path="/register" exact component = {Register} />;
        <Route path="/suporte" exact component = {Suporte} />
        <Route path="/forum" exact component = {Forum} />
        <Route path="/premium" exact component = {Premium} />
        <Route path="/planos" exact component = {Planos} />
        <Route path="//" exact component = {Home} />
    </Switch>)
}
export default Routes;