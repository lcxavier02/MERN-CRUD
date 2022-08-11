import { Route, Routes }  from 'react-router-dom';
import TaskPage           from './components/TaskPage';
import TaskForm           from './components/TaskForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TaskPage />} />
      <Route path="/new" element={<TaskForm />} />
    </Routes>
  );
}

export default App;
