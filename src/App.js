
import './App.css';
import React, { useEffect } from 'react';
import Selector from './components/Selector';

function App() {
  let [routes, setRoutes] = React.useState([]);
  let [directions, setDirections] = React.useState([]);
  let [stops, setStops] = React.useState([]);
  let [showDirections, setShowDirections] = React.useState(false);
  let [showStops, setShowStops] = React.useState(false);
  let [chosenRoute, setChosenRoute] = React.useState();
  let [chosenDirection, setChosenDirection] = React.useState();

  useEffect(() => {
    fetch('https://svc.metrotransit.org/nextrip/routes')
       .then((response) => response.json())
       .then((data) => {
          setRoutes(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
  }, []);

  useEffect(() => {
    if(!chosenRoute || chosenRoute === "Select") {
      setShowDirections(false);
      setShowStops(false);
      return;
    }
    fetch('https://svc.metrotransit.org/nextrip/directions/' + chosenRoute)
         .then((response) => response.json())
         .then((data) => {
            setDirections(data);
            setShowDirections(true);
            setShowStops(false);
         })
         .catch((err) => {
            console.log(err.message);
            setShowDirections(false);
            setShowStops(false);
         });

    
    }, [chosenRoute]);

  function routeChosen(route) {
    setChosenRoute(route);
    setChosenDirection("Select");
  }

  useEffect(() => {
    if(!chosenDirection || chosenDirection === "Select") {
      setShowStops(false);
      return;
    }
    fetch('https://svc.metrotransit.org/nextrip/stops/' + chosenRoute + '/' + chosenDirection)
         .then((response) => response.json())
         .then((data) => {
            setStops(data);
            setShowStops(true);
         })
         .catch((err) => {
            console.log(err.message);
            setShowStops(false);
         });
    }, [chosenDirection]);

  function directionChosen(direction) {
    setChosenDirection(direction);
  }

  function translateRoutes(routes) {
    return routes.map((route) => ({id: route.route_id, display_name: route.route_label}));
  }

  function translateDirections(directions) {
    return directions.map((direction) => ({id: direction.direction_id, display_name: direction.direction_name}));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Here's our fancy Metro NextTrip App
        </p>
      </header>
      <div className="App-body">
        <div className="app-row"><div className='selector-label'>Select Route:</div><Selector options={translateRoutes(routes)} onSelection={routeChosen} value={chosenRoute}/></div>
        
        {showDirections && <div><div className='selector-label'>Select Direction:</div><Selector options={translateDirections(directions)} onSelection={directionChosen} value={chosenDirection}/></div>}
        {showStops && 
          <div className='stop-display'>
            <div className='stop-title'> Available Stops </div>
            <ul>
              {stops.map((stop) => {
                return(<li key={stop.description}>{stop.description}</li>)
              })}
            </ul> 
          </div>}
      </div>
    </div>
  );
}

export default App;