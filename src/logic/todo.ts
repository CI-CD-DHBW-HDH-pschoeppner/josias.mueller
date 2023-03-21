import { writable } from "svelte/store";
import { v4 as uuidv4 } from "uuid";

export class TodoItem {
  id = "";
  value = "";
  done = false;
}

// this function must return a unique ID every time it is called
export function generateID(): string {
  // TODO: implement
  return uuidv4();
}

// make sure, that
// the value isn't longer than 255 characters
// the value isn' empty
// the todo isn't contained in the todos array (case insensitive)
export function validateTodo(todo: TodoItem, todos: TodoItem[]): boolean {
  // TODO: implement
  if (todo.value.length > 255 || todo.value.trim().length <= 0) return false;
  const val_lower = todo.value.toLowerCase();
  for (const todo_i of todos) {
    if (todo_i.value.toLowerCase() == val_lower) return false;
  }
  return true;
}

// capitalize the first letter of the todo
export function formatTodo(todo: TodoItem): TodoItem {
  // TODO: implement
  return {
    ...todo,
    value: todo.value[0].toUpperCase() + todo.value.slice(1),
  };
}

// generate a random rgb color
// each value (r,g,b) should be between 50 and 150
function randomColourPart(): string {
  return Math.floor(Math.random() * (150 - 50 + 1) + 50).toString();
}

export function generateColor(): string {
  //TODO implement
  return (
    "rgb(" +
    randomColourPart() +
    "," +
    randomColourPart() +
    "," +
    randomColourPart() +
    ")"
  );
}

export const todoList = writable<TodoItem[]>([]);
