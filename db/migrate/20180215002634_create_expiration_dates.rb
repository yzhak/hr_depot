class CreateExpirationDates < ActiveRecord::Migration[5.1]
  def change
    create_table :expiration_dates do |t|
      t.date :date, null: false

      t.timestamps
    end
  end
end
