import React from 'react'
import { Switch, Route, Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import UserList from './components/UserList'
import EditUser from './components/EditUser'

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

                    <li className="navbar-item">
                        <Link to={"/users"} className="nav-link">View Users</Link>
                    </li>
                </div>
            </nav>

            <div className="container mt-3">
                    <Switch>
                        <Route exact path="/add" component={AddUser}/>
                        <Route exact path={["/","/users"]} component={UserList}/>
                        <Route path="/users/:id" component={EditUser}/>
                    </Switch>
            </div>
        </div>
    )
}

export default App
