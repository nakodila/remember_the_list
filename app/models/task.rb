class Task < ApplicationRecord
  validates :body, presence: true
  validates :done, inclusion: { in: [true, false] }

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id,
    dependent: :destroy

  belongs_to :list,
    class_name: 'List',
    foreign_key: :List_id,
    dependent: :destroy

  belongs_to :list,
    class_name: 'List',
    foreign_key: :List_id,
    dependent: :destroy,
    optional: true
end
