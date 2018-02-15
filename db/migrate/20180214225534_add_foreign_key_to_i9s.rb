class AddForeignKeyToI9s < ActiveRecord::Migration[5.1]
  def change
    add_column :i9s, :employee_id, :bigint, null: false
  end
end
