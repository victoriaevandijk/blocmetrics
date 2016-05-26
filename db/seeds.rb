require 'faker'

5.times do
User.new(
    email: Faker::Internet.email,
    password: Faker::Internet.password(8),
    )
end

15.times do
RegisteredApplication.create(
    name: Faker::App.name,
    url: Faker::Internet.url,
    user: User.all.sample
    )
end

150.times do
Event.create(
      name: Faker::Name.name,
      created_at: Faker::Time.between(21.days.ago, Date.today),
      registered_application: RegisteredApplication.all.sample
        )
end

User.new(
    email:      'victoriaevandijk@gmail.com',
    password:   'helloworld',
)


puts "Seed finished"
puts "#{User.count} users created"
puts "#{RegisteredApplication.count} registered applications created"
puts "#{Event.count} events created"