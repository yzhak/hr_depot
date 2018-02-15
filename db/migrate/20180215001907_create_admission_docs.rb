class CreateAdmissionDocs < ActiveRecord::Migration[5.1]
  def change
    create_table :admission_docs do |t|
      t.string :number, null: false
      t.string :issuing_country

      t.timestamps
    end
  end
end
