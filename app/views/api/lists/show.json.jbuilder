# json.partial! '/api/lists/list', list: @list
json.extract! @list, :id, :title, :author_id
