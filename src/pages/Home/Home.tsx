import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    //aqui van todas las variables (use state), hooks
    const navigate = useNavigate(); //navigate se convierte en una funcion
    //van funciones
    const navigateToSearch = () => {
        navigate('/search') //navegamos a la pagina de search
    };

    const navigateToTasks = (id: string) => {
        navigate('/tasks/${id}'); //navegamos a la pagina de tasks
    };

    //van use effects
    //va el render
  return (
    <div>
        <div> 
            <Link to="/about">About</Link> 
            <button onClick={navigateToSearch}> Go to Search</button>
            <button onClick={() => navigateToTasks('123')}> Go to Tasks 123</button>
        </div>
        <h1>Dashboard</h1>
    </div>
  );
};

export default Home;
