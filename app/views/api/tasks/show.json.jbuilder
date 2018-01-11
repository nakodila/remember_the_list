json.task do
  json.id @task.id
  json.body @task.body
  json.author_id @task.author_id
  json.list_id @task.list_id
  json.parent_id @task.parent_task_id
  json.dueDate @task.due_date
  json.subtasks @task.subtasks
  json.done @task.done
end
