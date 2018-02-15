class AddForeignKeyToAdmissionDocs < ActiveRecord::Migration[5.1]
  def change
    add_column :admission_docs, :i9_id, :bigint, null: false
  end
end
