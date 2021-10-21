import React, {Suspense} from "react";
import {Switch, Route} from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"));
const Selecting = React.lazy(() => import("../pages/Selecting"));
const Login = React.lazy(() => import("../pages/Login"));
const Game = React.lazy(() => import("../pages/Game"));
const SignUp = React.lazy(() => import("../pages/SignUp"));

const Routes = () => <Switch>
    <Suspense fallback={<div>Loading...</div>}>
        <Route path="/game/:id" component={Game} />
        <Route path="/select/:id" component={Selecting} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/" component={Home}/>
    </Suspense>
</Switch>;

export default Routes;
