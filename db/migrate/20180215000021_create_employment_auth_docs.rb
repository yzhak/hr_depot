class CreateEmploymentAuthDocs < ActiveRecord::Migration[5.1]
  def change
    create_table :employment_auth_docs do |t|
      t.string :title, null: false
      t.string :issuing_authority, null: false
      t.string :number, null: false
      t.date :expiration, null: false

      t.timestamps
    end
  end
end
