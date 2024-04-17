import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpdatePage from './routes/UpdatePage'
import RestaurantDetailPage from './routes/RestaurantDetailPage'
import Home from "./routes/Home";




const App = () => {
    return <div>
        <Router>
            <Switch>
            <Route exact path="/" Component={Home}/>
            <Route exact path="/restaurants/:id/update" Component={UpdatePage}/>
            <Route exact path="/restaurants/:id" Component={RestaurantDetailPage}/>
            </Switch>
        </Router>
        </div>
}

export default App 