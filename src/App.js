import React from 'react'
import { Switch, Route, Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import AddUser from './components/AddUser'

function App(){
    return(
        <div>
            <nav class="navbar navbar-expand navbar-dark bg-dark">
                <a href="/users" className="navbar-brand">
                    MyPortal
                </a>

                <div className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to={"/add"} className="nav-link">Add</Link>
                    </li>
                </div>
            </nav>

            <div className="container mt-3">
                    <Switch>
                        <Route path="/add" component={AddUser}/>
                    </Switch>
            </div>
        </div>
    )
}

export default App