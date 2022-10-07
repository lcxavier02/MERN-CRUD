import { Route, Routes }  from 'react-router-dom';
import TaskPage           from './pages/TaskPage';
import TaskForm           from './pages/TaskForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/new" element={<TaskForm />} />
      </Routes>
    </>
  );
}

export default App;
