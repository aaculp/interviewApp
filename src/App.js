// Libraries

import { useReducer } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Dependencies

import HomeScreen from './homeScreen';
import MiddleScreen from './middleScreen';
import ResultsScreen from './resultsScreen';
import { AppContext, initialState } from "./global-state/context";
import { reducer } from "./global-state/reducer";

// Public

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/middleScreen' element={<MiddleScreen />} />
        <Route path='/resultsScreen' element={<ResultsScreen />} />
      </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
