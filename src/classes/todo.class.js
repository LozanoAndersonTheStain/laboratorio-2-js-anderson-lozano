export class Todo {
  static fromJson(tarea, id, completado, creado) {
    const temTodo = new Todo(tarea)
    temTodo.id = id
    temTodo.completado = completado
    temTodo.creado = creado

    return temTodo
  }

  constructor(tarea) {
    this.tarea = tarea

    this.id = new Date().getTime() //145621534 repre de fecha
    this.completado = false
    this.creado = new Date()
  }
}
