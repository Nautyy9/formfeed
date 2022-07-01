import Form from "./components/Form";
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import View from "./components/View";
import LoginPage from "./components/LoginPage";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path='add' element={<Form/>}/>
      <Route path='view' element={<View/>}/>
      <Route exact path='sign-up' element={<Signup/>}/>
    </Routes>
    </Router>
    
  );
}

export default App;
