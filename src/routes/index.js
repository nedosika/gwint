import React, {Suspense} from "react";
import {Switch, Route} from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"));
const Login = React.lazy(() => import("../pages/Login"));
const SignUp = React.lazy(() => import("../pages/SignUp"));
const Game = React.lazy(() => import("../pages/Game"));
const GameCreator = React.lazy(() => import("../pages/GameCreator"));
const Profile = React.lazy(() => import("../pages/Profile"));

const Routes = () => <Switch>
    <Suspense fallback={<div>Loading...</div>}>
        <Route path="/game/:id" component={Game} />
        <Route path="/create" component={GameCreator} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route exact path="/" component={Home}/>
    </Suspense>
</Switch>;

export default Routes;
