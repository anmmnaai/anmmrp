import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Boxes from './components/Data'
import Buttons from './components/Buttons'
import TableHeader from './components/TableHeader';
import Bottom from './components/Bottom';
function App() {
  return (
    <div className="App">
      <Header/>
      <Boxes/>
      <Buttons/>
      <TableHeader/>
      <Bottom/>
    </div>
  );
}

export default App;
