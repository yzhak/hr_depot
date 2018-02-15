class AddForeignKeyToEmploymentAuthDocs < ActiveRecord::Migration[5.1]
  def change
    add_column :employment_auth_docs, :i9_id, :bigint, null: false
  end
end
