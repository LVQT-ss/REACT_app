import './App.css';
import { Link, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="container mx-auto">
      <nav className='bg-gray-100 flex gap-4'>
        <NavLink to='/Invoices'><span>Invoices</span></NavLink>
        <NavLink to='/Expenses'><span>Expenses</span></NavLink>
      </nav>
    </div>
  );
}

export default App;
