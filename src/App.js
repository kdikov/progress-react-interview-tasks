import './App.css';
import '@progress/kendo-theme-default/dist/all.css';
import React, {useState} from "react";
import { Route, Switch, BrowserRouter  } from "react-router-dom";
import AppMenuContainer from "./components/AppMenuContainer";
import Home from "./components/Home";
import Destinations from "./components/Destinations";
import Book from "./components/Book";
//Loading initial Grid settings, Grid's data, etc. 
import {InitialState} from "./initialAppState/initialAppState";
//

function App() {
  //Reservation's Grid state:
  const [destinationDataState, setDestinationsDataState] = useState(InitialState.DestinationDataState);
  const [destinationGridColumns, setDestinationsGridColumns] = useState(InitialState.DestinationGridColumns);
  const [destinations, setDestinations] = useState(InitialState.Destinations);
  //
  return (
    <BrowserRouter>
      <AppMenuContainer>
        <Switch>
          <Route exact={true} path="/" component={Home}  />
          <Route exact={true} path="/destinations" render={(props)=>(
            <Destinations destinationDataState={destinationDataState} destinationGridColumns={destinationGridColumns} setDestinationGridColumns={setDestinationsGridColumns} setDestinationDataState={setDestinationsDataState}
            destinations={destinations} setDestinations={setDestinations}/>
          )} />
          <Route exact={true} path="/book" render={(props)=>(
            <Book destinations={destinations}/>
          )} />
        </Switch>
      </AppMenuContainer>
    </BrowserRouter>
  )
}  

export default App;
