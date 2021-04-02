import './App.css';
import { BrowserRouter as Router,
    Switch, 
    Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import GuitarrasPage1 from './pages/GuitarrasPage1'
import GuitarrasPage2 from './pages/GuitarrasPage2'
import ContactoPage from './pages/ContactoPage'

function App() {
  return (
      <Router>
            <Switch>
              <Route exact path="/">
                  <MainPage />
              </Route>
              <Route exact path="/guitarras/1">
                  <GuitarrasPage1 />
              </Route> 
              <Route exact path="/guitarras/2">
                  <GuitarrasPage2 />
              </Route> 
              <Route exact path="/contacto">
                  <ContactoPage />
              </Route>                                                      
          </Switch>
      </Router>
  )
}

export default App;
