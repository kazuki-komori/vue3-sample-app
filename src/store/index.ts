import { createStore } from "vuex"
import { ITodo } from "./../types/todo.d"

interface IState {
  Todos: ITodo[]
}

export default createStore<IState>({
  state: {
    Todos: [],
  },
  mutations: {
    ADD_TODO: (state, todo: ITodo) => {
      state.Todos.push(todo)
    },
    RESET_TODO: (state) => {
      state.Todos = []
    },
  },
  actions: {
    addTodo: ({ commit }, todo: ITodo) => {
      commit("ADD_TODO", todo)
    },
    resetTodo: ({ commit }) => {
      commit("RESET_TODO")
    },
  },
  getters: {
    getTodos: (state) => {
      return state.Todos
    },
  },
})
