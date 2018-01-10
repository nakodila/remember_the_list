class Task < ApplicationRecord
  validates :body, presence: true
  validates :body, presence: {message: "No name entered. Please choose a name."}
  validates :done, inclusion: { in: [true, false] }

  has_many :subtasks,
  class_name: "Task",
  foreign_key: :parent_task_id,
  dependent: :destroy

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id

  belongs_to :list,
    class_name: 'List',
    foreign_key: :list_id,
    optional: true

  belongs_to :parent_task,
    class_name: 'Task',
    foreign_key: :parent_task_id,
    optional: true

end
