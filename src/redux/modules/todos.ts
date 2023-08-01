export interface Todo {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
}

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

export const createTodo = (payload: Todo) => {
  return { type: ADD_TODO, payload };
};

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: number;
}

export const deleteTodo = (payload: number) => {
  return { type: DELETE_TODO, payload };
};

interface ToggleStatusTodoAction {
  type: typeof TOGGLE_STATUS_TODO;
  payload: number;
}

export const toggleStatusTodo = (payload: number) => {
  return { type: TOGGLE_STATUS_TODO, payload };
};

const initialState = {
  todos: [
    {
      id: Date.now(),
      title: "리액트 공부하기",
      content: "리액트 입문 강의 듣기",
      isDone: true,
    },
    {
      id: Date.now() + 1,
      title: "리액트 공부하기",
      content: "리액트 숙련 강의 듣기",
      isDone: false,
    },
  ],
};

type TodoActionTypes =
  | AddTodoAction
  | DeleteTodoAction
  | ToggleStatusTodoAction;

const todos = (state = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_STATUS_TODO:
      const toggleStatusTodos = state.todos.map(function (item) {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
      return { ...state, todos: toggleStatusTodos };
    case DELETE_TODO:
      const deletedTodos = state.todos.filter(
        (todo) => action.payload !== todo.id
      );
      return { ...state, todos: deletedTodos };
    default:
      return state;
  }
};

export default todos;
