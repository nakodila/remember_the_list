json.task do
  json.id @task.id
  json.body @task.body
  json.authorId @task.author_id
  json.listId @task.list_id
  json.parentId @task.parent_task_id
  json.dueDate @task.due_date
  json.subtasks @task.subtasks
  json.done @task.done
end
