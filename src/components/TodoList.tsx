import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onDeletePressed: (id: number) => void;
}

export default function TodoList({
    todos,
    onCompletedChange,
    onDeletePressed
}: TodoListProps) {
    const todosSorted = todos.sort((a,b) => {
        if (a.completed === b.completed) {
            return b.id - a.id;
        }
        return a.completed ? 1 : -1
    })

    return(
        <>
        <div className="space-y-2">
        { todosSorted.map(todo => (
          <p key={todo.id} className="text-lg">
            <TodoItem
            key={todo.id}
            todo={todo}
            onCompletedChange={onCompletedChange}
            onDeletePressed={onDeletePressed}
            />
          </p>
        )) }
      </div>
      {
        todos.length === 0 && (
            <p className="text-center text-sm text-gray-500">
                No todos...yet!
            </p>
        )
      }
      </>
    );
}