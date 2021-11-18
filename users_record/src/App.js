import './App.css';

import {BrowserRouter ,Route,Link, useHistory} from "react-router-dom"
import HomePage from './Component/HomePage';
import userUpdateForm from './Component/UserUpdateForm';
import Header from './Component/Header';
import { Grid } from '@material-ui/core';
function App() {
  return (
      <div className="App">
        <Grid container>
          <Grid item lg={12} xs={12}><Header/></Grid>
          <Grid item lg={12}>
            <BrowserRouter>
            <Route path="/" exact={true} component={HomePage}/>
            <Route path="/update_page" component={userUpdateForm}/>
            </BrowserRouter>
          </Grid>
        </Grid>
      </div>

  );
}

export default App;
