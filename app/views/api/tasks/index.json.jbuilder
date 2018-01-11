@tasks.each do |task|
  json.set! task.id do
    json.extract! task, :id, :body, :author_id, :list_id, :due_date, :parent_task_id, :done
  end
end
