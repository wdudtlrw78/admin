import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import './app.css';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
