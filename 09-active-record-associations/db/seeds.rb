house = Doctor.create(name: 'house')
tashawn = Patient.create(name: 'tashawn', condition: 'itchy')

# we can explicitly create a new instance of our join:
Appointment.create(patient: tashawn, doctor: house, time: DateTime.new(2018, 6, 18))

# OR we can use the shovel operator to create the join for us

house.patients << tashawn
# ar will know to create an instance of our join––appointment.
# This will NOT work if my join needs more information than the foreign keys.
# Using the shovel operator will set time to nil on our new appointment
