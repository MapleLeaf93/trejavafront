import Navbar from './components/navbar/Navbar';
import AllPassengers from './components/passengers/AllPassengers';
import PassengerWithTickets from './components/passengers/PassengerWithTickets';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<AllPassengers/>}/>
          <Route path='passengerdetails/:id' element={<PassengerWithTickets/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
