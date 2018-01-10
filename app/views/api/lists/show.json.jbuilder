# json.partial! '/api/lists/list', list: @list
# json.extract! @list, :id, :title, :author_id

json.list do
  json.id @list.id
  json.title @list.title
  json.authorId @list.author_id
end
