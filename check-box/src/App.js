import React, {useState, useCallback, useEffect} from 'react';
import { useCheckboxState, Checkbox } from "reakit/Checkbox";
import {useDispatch, useSelector} from 'react-redux';
import {checked_values} from './index';
import {connect} from 'react-redux';
import './App.css';




function App() {
  const checkedbox = useCheckboxState({ state: [] });
  const checkbox = useSelector(state => state.checkedbox);
  const dispatch = useDispatch();
  dispatch(checked_values())
  
  
 
  
  return (
    <div className="App">
      <nav class="navmenu">
        <ul className="menu">
          <li className=" logo"><a href="#">Logo</a></li>
          <li className="item "><a href="#">Home</a></li>
          <li className="item"><a href="#">Portfolio</a> </li>
          <li className="item"><a href="#">Clients</a></li>
          <button className ="item button secondary" >Get in Touch</button>
        </ul>
      </nav>
      <div className= "container">
        <div className="box">
          <h3>Portugal</h3>
          <Checkbox {...checkedbox} value="Asiya Jayavant"   />
          <label > Asiya Jayavant</label><br/>
          <Checkbox {...checkedbox} value="Luvleen Lawrence" />
          <label > Luvleen Lawrence</label><br/>
          <Checkbox {...checkedbox} value="Rey Mibournrt"  />
          <label > Rey Mibournr</label><br/>
          <Checkbox {...checkedbox} value="Cayla Brister"  />
          <label > Cayla Brister</label><br/><br/>
          <h3>Nicaragua</h3>
          <Checkbox {...checkedbox} value="Deveedas Nandi"   />
          <label > Deveedas Nandi</label><br/>
          <Checkbox {...checkedbox} value="Obasey Chidy"  />
          <label > Obasey Chidy</label><br/>
          <Checkbox {...checkedbox} value="Xenie Dolezelova"   />
          <label > Xenie Dolezelova</label><br/>
          <Checkbox {...checkedbox} value="Ezequiel Dengra"  />
          <label > Ezequiel Dengra</label><br/><br/>
          <h3>Marshall Islands</h3>
          <Checkbox {...checkedbox} value="Aaron Almaraz"  />
          <label > Aaron Almaraz</label><br/>
          <Checkbox {...checkedbox} value="Jelena Denisova"  />
          <label > Jelena Denisova</label><br/>
          
        </div>
        <div className="box">
         <center> <ul>
            {
              checkedbox.state.map(check => (
              <li className="box_design">{check}</li>
              
              ))
            }
          </ul></center>
        </div>
      </div>
      
    </div>
    
  );
  
}

export default connect()(App);
