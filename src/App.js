import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";


///////////
import {Provider} from "react-redux";
//////////
import store from './store';

function App() {
  return (
<Provider store={store} >
  <Container fluid>
    <h1 align="center">Todo App with Redux</h1>
    <Todo />
    <TodoForm />
  </Container>
</Provider>
  );
}

export default App;
