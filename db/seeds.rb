dpt_arr = ['Electronics', 'Home', 'Clothes', 'Toys', 'Pharmacy']
@price_arr = [11.50, 29.99, 14.35, 65.99, 304.50]

dpt_arr.each do |name|
  d = Department.create(
    name: name,
    description: Faker::TwinPeaks.quote
  )
  10.times do
    d.items.create(
      name: Faker::Appliance.brand,
      description: Faker::Appliance.equipment,
      qty: Faker::Number.between(1, 10),
      price: @price_arr.sample
    )
  end
end

puts 'seeded'