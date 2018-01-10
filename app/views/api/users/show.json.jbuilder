json.user do
  json.id @user.id
  json.username @user.username
end

json.lists do
  @user.lists.each do |list|
    json.set! list.id do
      json.id list.id
      json.title list.title
      json.author_id list.author_id
    end
  end
end
