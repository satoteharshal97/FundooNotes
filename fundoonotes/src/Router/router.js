import { BrowserRouter, Route, Switch } from "react-router-dom";

import SignUp from "../pages/signup/signup";
import SignIn from "../pages/signin/signin";
import Dashboard from "../pages/Dashboard/dashboard";

function Router() {
    return (
        <div>
            <BrowserRouter >
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route  path="/Dashboard"  component={Dashboard}/>
                    <Route path="/SignUp" component={SignUp} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default Router;