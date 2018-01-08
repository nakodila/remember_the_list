# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all


User.create!(
  username: 'nakodila',
  password: 'pass123',
  first_name: 'kuzmicheva',
  last_name: 'elena',
  email: 'elena@gmail.com'
)
User.create!(
  username: 'mashu',
  password: 'pass123',
  first_name: 'mashu',
  last_name: 'mashu',
  email: 'mashu@gmail.com'
)
User.create!(
  username: 'kaninhen',
  password: 'pass123',
  first_name: 'artem',
  last_name: 'kurenkov',
  email: 'kurenkov@gmail.com'
)
User.create!(
  username: 'sweets',
  password: 'pass123',
  first_name: 'sweets',
  last_name: 'kurenkova',
  email: 'sk@gmail.com'
)

List.delete_all

List.create!(
  title: "Make bathtab bombs",
  author_id: User.find_by(username: "nakodila")[:id]
)

List.create!(
  title: "Homework",
  author_id: User.find_by(username: "nakodila")[:id]
)

List.create!(
  title: "Essencial oil box gifts",
  author_id: User.find_by(username: "nakodila")[:id]
)
List.create!(
  title: "Job Search",
  author_id: User.find_by(username: "nakodila")[:id]
)

List.create!(
  title: "Shopping List",
  author_id: User.find_by(username: "nakodila")[:id]
)

List.create!(
  title: "Check Homeworks",
  author_id: User.find_by(username: "mashu")[:id]
)
List.create!(
  title: "Fix AppAcademy website",
  author_id: User.find_by(username: "mashu")[:id]
)

List.create!(
  title: "Play card game in the office",
  author_id: User.find_by(username: "mashu")[:id]
)

List.create!(
  title: "Be ready!",
  author_id: User.find_by(username: "mashu")[:id]
)
