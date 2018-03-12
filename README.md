# README

[![Build Status](https://codeship.com/projects/f5472890-ecbe-0135-6c23-1ea4b672d33f/status?branch=master)](https://codeship.com/projects/f5472890-ecbe-0135-6c23-1ea4b672d33f/status?branch=master)
[![Code Climate](https://codeclimate.com/github/yzhak/hr_depot/badges/gpa.svg)](https://codeclimate.com/github/yzhak/hr_depot)
[![Coverage Status](https://coveralls.io/repos/github/yzhak/hr_depot/badge.svg?branch=master)](https://coveralls.io/github/yzhak/hr_depot?branch=master)

The App is an employee document management solution that allows businesses to collect, store,
view, edit, and delete I‑9 forms.

* Instructions to Run Locally

1.Clone using git clone https://github.com/yzhak/hr_depot.git
2.Install dependencies using
    npm install
    npm install react-search-input
    bundle install
3.Create database
    rake db:create
    rake db:migrate
    rake db:seed
    rake db:test:prepare
4.Run tests using
    rspec
    npm test
5.Start your server using
    rails s
    npm start
6.Navigate to http://localhost:3000

* Instructions to Run in Production

Navigate to https://hr-depot.herokuapp.com/

* Instructions to Login

A super user (e.g., an employee of HR Depot) may whitelist other users (e.g., HR persons of a customer) who will receive an email containing their sign-in credentials.

To sign-in as a super user, please use the following sign-in credentials:
Email: abream@master.com
Password: password1234
Please note that some email providers may block the email or send it to your spam folder.

Alternatively, to sign-in as a whitelisted user, please use the following sign-in credentials:
Email: cadams@abc.com
Password: somepswd

* Discussion

I used the following:
React
React Router
Fetch API
Ruby on Rails
Action Mailer
PostgreSQL
CSS/HTML
Capybara
Enzyme
