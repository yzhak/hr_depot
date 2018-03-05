# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# company1 = Company.create!(name: "Launch Academy")
company2 = Company.create!(name: "ABC")
company = Company.create!(name: "Master")


User.create!(email: "abream@master.com", password: "password1234", first_name: "Adam", last_name: "Bream", company: company)
User.create!(email: "bgray@master.com", password: "password1234", first_name: "Barbara", last_name: "Gray", company: company)

# User.create!(email: "name1@launchacademy.com", password: "password1234", first_name: "Alicia", last_name: "Smith", company: company1)
# User.create!(email: "name2@launchacademy.com", password: "password1234", first_name: "John", last_name: "Snow", company: company1)
# User.create!(email: "name3@launchacademy.com", password: "password1234", first_name: "Cortney", last_name: "White", company: company1)
User.create!(email: "cadams@abc.com", password: "somepswd", first_name: "Chris", last_name: "Adams", company_id: company2.id)
# User.create!(email: "name5@abc.com", password: "password1234", first_name: "Abigail ", last_name: "Brooks", company: company2)
#
# employee1 = Employee.create!(last_name: "Walter", first_name: "Bill", street_number_name: "123 Wall Street", city: "New York", state: "NY", zip_code: "10001", date_of_birth: 19561118, company: company1)
# employee2 = Employee.create!(last_name: "Black", first_name: "Chris", street_number_name: "100 Cross Street", city: "Boston", state: "MA", zip_code: "20001", date_of_birth: 19610814, company: company1)
# employee3 = Employee.create!(last_name: "Salthouse", first_name: "Debra", street_number_name: "89 Technology Drive", city: "Manchester", state: "NH", zip_code: "03031", date_of_birth: 19890520, company: company1)
# employee4 = Employee.create!(last_name: "Brown", first_name: "Maria", street_number_name: "80 Home Road", city: "Burlington", state: "MA", zip_code: "01803", date_of_birth: 19850317, company: company2)
# employee5 = Employee.create!(last_name: "Davis", first_name: "James", street_number_name: "1593 Green Square", city: "Andover", state: "MA", zip_code: "01810", date_of_birth: 19760206, company: company2)
# employee6 = Employee.create!(last_name: "Johnson", first_name: "Robert", street_number_name: "29 Summer Street", city: "Somerville", state: "MA", zip_code: "02129", date_of_birth: 19900111, company: company1)
# employee7 = Employee.create!(last_name: "Williams", first_name: "Linda", street_number_name: "550 Memorial Drive", city: "Cambridge", state: "MA", zip_code: "02139", date_of_birth: 19820619, company: company1)
# employee8 = Employee.create!(last_name: "Miller", first_name: "Michael", street_number_name: "75 Prospect Road", city: "Brookline", state: "MA", zip_code: "02110", date_of_birth: 19710820, company: company1)
# employee9 = Employee.create!(last_name: "Gray", first_name: "Barbara", street_number_name: "29 Broad Road", city: "Lexington", state: "MA", zip_code: "02420", date_of_birth: 19901231, company: company1)
# employee10 = Employee.create!(last_name: "Cooper", first_name: "Charles", street_number_name: "980 Orchard Blvd", city: "Boston", state: "MA", zip_code: "02110", date_of_birth: 19950915, company: company1)
# employee11 = Employee.create!(last_name: "Bell", first_name: "Susan", street_number_name: "36 Woods Lane", city: "Cambridge", state: "MA", zip_code: "02139", date_of_birth: 19871002, company: company1)
