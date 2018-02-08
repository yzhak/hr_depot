# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

company1 = Company.create!(name: "Launch Academy")
company2 = Company.create!(name: "Ropes & Gray LLP")

User.create!(email: "name1@launchacademy.com", password: "password1234", first_name: "Alicia", last_name: "Smith", role: "admin", company: company1)
User.create!(email: "name2@launchacademy.com", password: "password1234", first_name: "John", last_name: "Snow", role: "member", company: company1)
User.create!(email: "name3@ropesgray.com", password: "password1234", first_name: "Cortney", last_name: "White", role: "admin", company: company2)
User.create!(email: "name4@ropesgray.com", password: "password1234", first_name: "Chris", last_name: "Adams", role: "member", company: company2)
