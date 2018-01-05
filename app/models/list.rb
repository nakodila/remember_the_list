class List < ApplicationRecord
  validates :title, :author_id, presence: true
  validates :title, presence: {message: "No name entered. Please choose a name."}
  validates :title, uniqueness: {message: "You already have a list with this name. Please choose another name."}

  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id

end
