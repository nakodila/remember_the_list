@tasks.each do |task|
  json.set! task.id do
    json.extract! task, :id, :body, :author_id, :list_id, :parent_task_id
  end
end
