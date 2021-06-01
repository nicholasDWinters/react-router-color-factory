import React, { useState } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import ColorList from './ColorList';
import ShowColor from './ShowColor';
import ColorForm from './ColorForm';

function App() {
  let defaults = [{ color: 'black', hex: '#000000' }];
  let [colors, setColors] = useState(defaults);
  const addColor = (c) => {
    setColors(colors => [...colors, c]);
  }
  return (
    <div className="App">
      <Switch>
        <Route exact path='/colors/new'><ColorForm addColor={addColor} /></Route>
        <Route path='/colors/:color'><ShowColor colors={colors} /></Route>
        <Route exact path='/colors'><ColorList colors={colors} /></Route>
        <Redirect to='/colors' />
      </Switch>
    </div>
  );
}

export default App;
