import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import ToDoList from "./components/todo-list/ToDoList"
import CounterGroup from "./components/counter-group/CounterGroup"

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/todolist">ToDo List</Link>
                    </li>
                    <li>
                        <Link to="/countergroup">Counter Group</Link>
                    </li>
                </ul>

                <hr />

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/todolist">
                        <ToDoList/>
                    </Route>
                    <Route path="/countergroup">
                        <CounterGroup/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

// You can think of these components as "pages"
// in your app.

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}
//
// function ToDoList() {
//     return (
//         <div>
//             <h2>To Do List</h2>
//             <ToDo/>
//         </div>
//     );
// }
//
// function CounterGroup() {
//     return (
//         <div>
//             <h2>CounterGroup</h2>
//         </div>
//     );
// }