import React, {Suspense} from "react";
import {Switch, Route} from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Room = React.lazy(() => import("./pages/Room"));

const Routes = () => <Switch>
    <Suspense fallback={<div>Loading...</div>}>
        <Route path="/room/:id" component={Room} />
        <Route exact path="/" component={Home}/>
    </Suspense>
</Switch>;

export default Routes;
