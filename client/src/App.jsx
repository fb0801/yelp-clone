import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpdatePage from './routes/UpdatePage'
import RestaurantDetailPage from './routes/RestaurantDetailPage'
import Home from "./routes/Home";
import { RestaurantsContextProvider } from './context/RestaurantsContext';




const App = () => {
    return (
        <RestaurantsContextProvider>
    <div className='container'>
        <Router>
            <Switch>
            <Route exact path="/" Component={Home}/>
            <Route exact path="/resta7urants/:id/update" Component={UpdatePage}/>
            <Route exact path="/restaurants/:id" Component={RestaurantDetailPage}/>
            </Switch>
        </Router>
        </div>
        </RestaurantsContextProvider>
        )

}


export default App 