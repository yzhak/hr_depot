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

employee1 = Employee.create!(last_name: "Walter", first_name: "Bill", street_number_name: "123 Wall Street", city: "New York", state: "NY", zip_code: "10001", date_of_birth: 19561118, company: company1)
employee2 = Employee.create!(last_name: "Black", first_name: "Chris", street_number_name: "100 Cross Street", city: "Boston", state: "MA", zip_code: "20001", date_of_birth: 19610814, company: company3)
employee3 = Employee.create!(last_name: "Salthouse", first_name: "Debra", street_number_name: "89 Technology Drive", city: "Manchester", state: "NH", zip_code: "50003", date_of_birth: 19890520, company: company3)
employee4 = Employee.create!(last_name: "Brown", first_name: "Maria", street_number_name: "80 Home Road", city: "Chelsea", state: "MA", zip_code: "20096", date_of_birth: 19850317, company: company3)
