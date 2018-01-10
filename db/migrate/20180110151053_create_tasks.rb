class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :list_id
      t.integer :parent_task_id
      t.boolean :done, null: false

      t.timestamps
    end

    add_index :tasks, :author_id
    add_index :tasks, :list_id
    add_index :tasks, :parent_task_id
  end
end
