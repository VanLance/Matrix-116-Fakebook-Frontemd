import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Workout from './pages/Workout';
import Posts from './pages/Posts';
import Header from './components/Header';


function App() {
  return (
    <Container className='App'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Posts /> }/>
          <Route path='/posts' element={ <Posts /> }/>
          <Route path='/workouts' element={ <Workout /> }/>
          <Route path='*' element={ <Navigate to='/' />}/>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
