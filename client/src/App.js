import './App.css';
import Home from './components/Home';
import Auth from './components/Auth';
import { AppContextProvider } from './Context'
function App() {
  return (
    <AppContextProvider>
      <Auth/>
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
