import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/myComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Example/Home';
import Nav from './Nav/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/todo" element={<ListTodo />} />
            <Route path='/about' element={<MyComponent/>}/>
            <Route path='/user' exact element={<ListUser/>}/>
            <Route path='/user/:id' element={<DetailUser/>}/>
          </Routes>
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
    </Router>
  );
}

export default App;
