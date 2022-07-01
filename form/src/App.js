import Form from "./components/Form";
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import View from "./components/View";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path='add' element={<Form/>}/>
      <Route path='view' element={<View/>}/>
    </Routes>
    </Router>
    
  );
}

export default App;
