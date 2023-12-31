import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/myComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Example/Home';
import Nav from './Nav/Nav';
/**
 * 
 *  REACT có 2 component : class component / function component ( funtion , arrow func)
 * 
 */
const App = () => {
  return (
    <div className="App">
      
      <header className="App-header">
      <Nav/>
        <img src={logo} className="App-logo" alt="logo" />
        


        {/* <MyComponent/> */}
        {/* <ListTodo /> */}
        <Home/>
           
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
