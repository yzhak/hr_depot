class CreateEmployees < ActiveRecord::Migration[5.1]
  def change
    create_table :employees do |t|
      t.string :last_name, null: false
      t.string :first_name, null: false
      t.string :middle_initial
      t.string :other_last_names
      t.string :street_number_name, null: false
      t.string :apt
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip_code, null: false
      t.date :date_of_birth, null: false
      t.string :email
      t.string :telephone

      t.timestamps
    end
  end
end
