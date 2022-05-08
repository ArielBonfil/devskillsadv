import './App.css';
import Home from './Home';
import { AppContextProvider } from './Context'
function App() {
  return (
    <AppContextProvider>
      <nav className="appNav">
        <a href="#">Home</a>
        <a href="#">Other Page</a>
      </nav>
      <Home/>
      <footer>
        <div>copyright</div>
        <div>All rights reserved</div>
      </footer>
    </AppContextProvider>
    
  );
}

export default App;
