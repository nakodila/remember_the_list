# json.partial! '/api/lists/list', list: @list
# json.extract! @list, :id, :title, :author_id

json.list do
  json.id @list.id
  json.title @list.title
  json.authorId @list.author_id
end

json.tasks do
  @list.tasks.each do |task|
    json.set! task.id do
      json.id task.id
      json.body task.body
      json.authorId task.author_id
      json.listId task.list_id
      json.parentId task.parent_task_id
      json.dueDate task.due_date
      json.done task.done
      json.subtasks task.subtasks
    end
  end
end
