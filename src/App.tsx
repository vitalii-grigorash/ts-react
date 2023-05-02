import { Route, Routes, NavLink } from 'react-router-dom';
import { UserPage } from "./components/UserPage";
import { TodosPage } from "./components/TodosPage";
import { UserItemPage } from './components/UserItemPage';
import { TodoItemPage } from './components/TodoItemPage';

function App() {

  function onButtonClick(num: number) {
    console.log('Click', num);
  }

  return (

    <div>

      <div>
        <NavLink to='/users'>К списку пользователей</NavLink>
        <NavLink to='/todos'>К списку дел</NavLink>
      </div>

      <Routes>

        <Route path='/users' element={<UserPage />} />

        <Route path='/todos' element={<TodosPage />} />

        <Route path='/users/:id' element={<UserItemPage />} />

        <Route path='/todos/:id' element={<TodoItemPage />} />

      </Routes>

    </div>

  );

}

export default App;
