class CreateI9s < ActiveRecord::Migration[5.1]
  def change
    create_table :i9s do |t|
      t.integer :status, null: false

      t.timestamps
    end
  end
end
