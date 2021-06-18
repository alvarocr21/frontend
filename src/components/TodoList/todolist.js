import classes from "./styles.module.scss";
const TodoList = () => {
  return (
    <div>
      <main className={classes.Container}>
        <section className={classes.Card}>
          <h1 className={classes.Title}>Todo List</h1>
          <form onSubmit="">
            <label>
              Tarea
              <input type="text" placeholder="Ingrese una tarea" />
            </label>
            <button type="submit">Agregar</button>
            <label>Por hacer</label>
            <div>
              <ul>
                <li><input type="text" value="tarea1" /></li>
                <li><input type="text" value="tarea2" /></li>
                <li><input type="text" value="tarea3" /></li>
              </ul>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default TodoList;
