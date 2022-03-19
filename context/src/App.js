import CustomerForm from './components/CustomerForm';
import Hello from './components/Hello';

import { CustomerProvider } from './contexts/Customer';

import './App.css';

function App() {
  return (
    <div className="app">
      <CustomerProvider>
        <Hello />
        <CustomerForm />
      </CustomerProvider>
    </div>
  );
}

export default App;
