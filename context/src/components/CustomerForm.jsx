import { useState, useContext } from "react";
import { CustomerContext } from "../contexts/Customer";

const CustomerForm = () => {
  const { submit } = useContext(CustomerContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('dados componente', { name, email });

    submit({name, email});
  }

  return(
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '25%', justifyContent: 'center', alignContent: 'center'}}>
      <label htmlFor="name">Nome: </label>
      <input 
        type="text" 
        name="name" 
        id="name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />

      <label htmlFor="email">Email: </label>
      <input 
        type="email" 
        name="email" 
        id="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />

      <button type="submit" style={{marginTop: '10px'}}>Enviar</button>
    </form>
  )
}

export default CustomerForm;