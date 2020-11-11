import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Logout from './components/Logout';

function App() {
  return (
    <div className='App'>
      <Header />
      <Menu />
      <Logout />
    </div>
  );
}

export default App;
