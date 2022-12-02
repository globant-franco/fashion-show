import './App.css';
//import {BrowserRouter as Router} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Woman from './screens/woman';
import Man from './screens/man';
import Landing from './screens/landing';

function App() {
  return (
    <AppRoutes/>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/woman" element={<Woman />} />
      <Route path="/man" element={<Man />} />
    </Routes>
  )
}


export default App;
