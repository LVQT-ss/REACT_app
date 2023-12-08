import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/myComponent';
import ListTodo from './Todos/ListTodo';
/**
 * 
 *  REACT có 2 component : class component / function component ( funtion , arrow func)
 * 
 */
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          simple TOTO Apps with REACTjs
        </p>
       
        
        {/* <MyComponent/> */}
        <ListTodo />
        
      </header>
    </div>
  );
}

export default App;
