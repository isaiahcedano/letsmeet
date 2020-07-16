import React from "react";
import URLS from "./url_paths";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import ChatRoom from "./WebPages/ChatRoom";
import MainPage from "./WebPages/MainPage";
import CreateGroupForm from "./WebPages/CreateGroupForm";
import ChangeNickNameForm from "./WebPages/ChangeNickNameForm";
import AddUserForm from "./WebPages/AddUserForm";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={URLS.HOME_PAGE} component={MainPage}/>
                <Route exact path={URLS.CHAT_ROOM} component={ChatRoom}/>
                <Route exact path={URLS.CREATE_GROUP_FORM} component={CreateGroupForm}/>
                <Route exact path={URLS.CHANGE_NICKNAME_FORM} component={ChangeNickNameForm}/>
                <Route exact path={URLS.ADD_USER_FORM} component={AddUserForm}/>
                <Redirect to={URLS.HOME_PAGE}/>
            </Switch>
        </Router>
    )
}

export default App