class AddForeignKeyToExpirationDates < ActiveRecord::Migration[5.1]
  def change
    add_column :expiration_dates, :i9_id, :bigint, null: false

  end
end
