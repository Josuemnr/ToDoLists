import React from 'react'
import { useParams } from 'react-router-dom';

const Tasks = () => {
    //aqui van todas las variables (use state)
    const {id} = useParams(); //regresa el objeto
    //destrucurizamos el objeto para no poner objeto. (as+i varias veces)

    //van funciones
    //van use effects
    //va el render
  return (
    <div>
        Página de Tareas
        <p>El id de la tarea que voy a buscar es: {id}</p>
    </div>
  );
};

export default Tasks;
