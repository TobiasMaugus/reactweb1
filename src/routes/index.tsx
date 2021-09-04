import {Switch, Route} from "react-router-dom";
import {Home} from "pages";
import {Suporte} from "pages";
import {Forum} from 'pages';
import {Premium} from 'pages';

const Routes = () =>{
    return (<Switch>
        <Route path="//" component = {Home} />;
        <Route path="/suporte" component = {Suporte} />
        <Route path="/forum" component = {Forum} />
        <Route path="/premium" component = {Premium} />
    </Switch>)
}
export default Routes;