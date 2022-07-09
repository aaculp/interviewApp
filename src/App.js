// Libraries

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Dependencies

import HomeScreen from './homeScreen';
import MiddleScreen from './middleScreen';
import ResultsScreen from './resultsScreen';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/middleScreen' element={<MiddleScreen />} />
      <Route path='/results' element={<ResultsScreen />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
