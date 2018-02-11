# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

company1 = Company.create!(name: "Launch Academy")
company2 = Company.create!(name: "Ropes & Gray LLP")
company3 = Company.create!(name: "XYZ")

User.create!(email: "name1@launchacademy.com", password: "password1234", first_name: "Alicia", last_name: "Smith", company: company1)
User.create!(email: "name2@launchacademy.com", password: "password1234", first_name: "John", last_name: "Snow", company: company1)
User.create!(email: "name3@ropesgray.com", password: "password1234", first_name: "Cortney", last_name: "White", company: company2)
User.create!(email: "name4@ropesgray.com", password: "password1234", first_name: "Chris", last_name: "Adams", company_id: company2.id)
User.create!(email: "name@xyz.com", password: "223344", first_name: "Y", last_name: "Z", company: company3)
