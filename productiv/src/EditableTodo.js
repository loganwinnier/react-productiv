import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 * 
 * State
 * -isEditing: boolean to determine if in edit state
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {
  const [isEditing, setIsEditing] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing(isEditing => !isEditing);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    update({ ...formData });
    toggleEdit();
  }

  const todoHtml = (
    <div className="mb-3">
      <div className="float-end text-sm-end">

        <button
          className="EditableTodo-toggle btn-link btn btn-sm"
          onClick={toggleEdit}>
          Edit
        </button>

        <button
          className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
          onClick={handleDelete}>
          Del
        </button>

      </div>

      <Todo todo={todo} />
    </div>);

  const todoEditingHtml = <TodoForm initialFormData={todo} handleSave={handleSave} />;

  return (
    <div className="EditableTodo">
      {isEditing ? todoEditingHtml : todoHtml}
    </div>
  );
}

export default EditableTodo;
