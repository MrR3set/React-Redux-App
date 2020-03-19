import React from 'react';
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import DataList from "./components/dataList";
import Navbar from "./components/Navbar"
import {fetchSwapi, fetchRickNmorty} from "./actions/actions";
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';

function App(props) {

  const fetchStarWars = e => {
    e.preventDefault();
    props.fetchSwapi();
  };
  const fetchRickNmorty = e => {
    e.preventDefault();
    props.fetchRickNmorty();
  };

  return (
    <div className="App">
      <Route path="/">
        <Navbar></Navbar>
      </Route>

      <div className="content-container">
        <Route exact path="/swapi">
          <h1>Stars wars characters</h1>
          <button onClick={fetchStarWars}>Get Data</button>
          <div className="data-list-wrapper">
            {props.isFetching ? <CircularProgress type="grow"></CircularProgress>: 
              props.error ? <p>Error {props.error}</p> : 
              <DataList data={props.data}></DataList>}
          </div> 
        </Route>
        <Route exact path="/rick-n-morty">
          <h1>Rick and Morty characters</h1>
            <button onClick={fetchRickNmorty}>Get Data</button>
            <div className="data-list-wrapper">
              {/* <CircularProgress type="grow"/> */}
              {props.isFetching ? <CircularProgress type="grow"></CircularProgress>: 
                props.error ? <p>Error {props.error}</p> : 
                <DataList data={props.data}></DataList>}
            </div>
        </Route>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return state
}

export default connect(
  mapStateToProps, 
  {fetchSwapi, fetchRickNmorty}
)(App);

