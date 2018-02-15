# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180215002824) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admission_docs", force: :cascade do |t|
    t.string "number", null: false
    t.string "issuing_country"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "i9_id", null: false
  end

  create_table "companies", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "employees", force: :cascade do |t|
    t.string "last_name", null: false
    t.string "first_name", null: false
    t.string "middle_initial"
    t.string "other_last_names"
    t.string "street_number_name", null: false
    t.string "apt"
    t.string "city", null: false
    t.string "state", null: false
    t.string "zip_code", null: false
    t.date "date_of_birth", null: false
    t.string "email"
    t.string "telephone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "company_id", null: false
  end

  create_table "employment_auth_docs", force: :cascade do |t|
    t.string "title", null: false
    t.string "issuing_authority", null: false
    t.string "number", null: false
    t.date "expiration", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "i9_id", null: false
  end

  create_table "expiration_dates", force: :cascade do |t|
    t.date "date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "i9_id", null: false
  end

  create_table "i9s", force: :cascade do |t|
    t.integer "status", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "employee_id", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.bigint "company_id", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
