# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.create(name: 'Betty')
User.create(name: 'Juan')
Restaurant.create(name: 'Betty´s Grill', address: 'Address 1', city: 'Addis Ababa')
Restaurant.create(name: 'Juan´s Grill', address: 'Address 2', city: 'Bogotá')
Section.create(name: 'Garden', image: '/garden.jpeg', description: 'Description 1', capacity: 50, cover: true, live_music: false, restaurant: Restaurant.first)
Section.create(name: 'Rooftop', image: '/rooftop.jpg', description: 'Description 2', capacity: 40, cover: false, live_music: true, restaurant: Restaurant.first)
Section.create(name: 'Lounge', image: '/lounge.jpg', description: 'Description 3', capacity: 30, cover: true, live_music: true, restaurant: Restaurant.second)
Section.create(name: 'Hall', image: '/hall.jpg', description: 'Description 4', capacity: 30, cover: true, live_music: true, restaurant: Restaurant.second)
Reservation.create(city: 'Addis Ababa', date: Date.today, number_of_person: 4, section: Section.first, user: User.first)
Reservation.create(city: 'Bogotá', date: Date.tomorrow, number_of_person: 2, section: Section.second, user: User.last)
