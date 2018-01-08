json.partial! "api/users/user", user: @user

json.lists do
  json.array! @user.lists, partial: 'api/lists/list', as: :list
end
