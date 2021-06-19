import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPencilAlt,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./styles.module.scss";
const TodoList = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  const URI = "http://localhost:4000/api";

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    obtieneTarea();
    //contarTodo();
  }, ["obtieneTarea"]);

  const obtieneTarea = async () => {
    const respuesta = await axios.get(URI);
    const { data } = respuesta;
    setTareas(data);
    console.log(data);
  };

  const creaTarea = (e) => {
    setTarea(e.target.value);
  };

  const agregaTarea = async (e) => {
    e.preventDefault();
    if (tarea === "") alert("Debe ingresar algún valor para agregar la tarea");
    else {
//console.log(actualiza)
     
        const NuevaTarea = { tarea: tarea, hecho: false };
      await axios.post(URI, NuevaTarea);
      setTarea("");
      //console.log(respuesta);
      }
   
      obtieneTarea();
    
  };

  const eliminarTarea = async (e,item) => { 
    e.preventDefault();
    console.log(item._id)
  await axios.delete(URI+'/'+item._id);
  
  //console.log(respuesta);
  obtieneTarea();
  alert('La tarea se cerró correctamente') 
};

  return (
    <div>
      <main className={classes.Container}>
        <section className={classes.Card}>
          <h1 className={classes.Title}>Todo List</h1>
          <form>
            <label>
              Tarea
              <input
                type="text"
                placeholder="Ingrese una tarea"
                onChange={creaTarea}
                value={tarea}
              />
            </label>

            <button onClick={agregaTarea}>Agregar</button>
            <label>Por hacer</label>
            <div>
              <ul>
                {tareas.map((item, index) => {
                  console.log(item.tarea);
                  return (
                    <div key={index}>
                      <li>
                        <input type="text" value={item.tarea} />
                        
                        <button className="eliminar" onClick={(e)=>eliminarTarea(e,item)}>
                          <FontAwesomeIcon icon={faCheck} />
                        </button>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default TodoList;
