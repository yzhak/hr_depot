class AddForeignKeyToEmployees < ActiveRecord::Migration[5.1]
  def change
    add_column :employees, :company_id, :bigint, null: false
  end
end
