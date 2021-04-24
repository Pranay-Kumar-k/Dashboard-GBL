import React from 'react';
import {Switch,Route} from "react-router-dom";
import Navbar from './Navbar';

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="*" component = {Navbar}/>
            </Switch>
        </div>
    )
}
