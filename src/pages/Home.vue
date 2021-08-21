<template>
  <form>
    <label for="title">タイトル</label>
    <input name="title" type="text" v-model="state.form.title" />
  </form>
  <button @click="addTodo">追加</button>
  <div :key="idx" v-for="(todo, idx) in todos">
    <p>{{ todo.title }} {{ todo.isDone ? "済" : "未" }}</p>
  </div>
  <button @click="resetTodo">リセット</button>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from "vue"
import { useStore } from "vuex"

interface State {
  form: {
    title: string
    isDone: boolean
  }
}

export default defineComponent({
  setup() {
    const state = reactive<State>({
      form: {
        title: "",
        isDone: false,
      },
    })

    const store = useStore()

    const todos = computed(() => store.getters.getTodos)
    const addTodo = () => {
      if (state.form.title !== "") {
        store.dispatch("addTodo", { ...state.form })
        state.form.title = ""
      }
    }
    const resetTodo = () => {
      store.dispatch("resetTodo")
    }
    return { state, addTodo, todos, resetTodo }
  },
})
</script>
