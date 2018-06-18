ActiveRecord::Schema.define(version: 2018_06_18_181633) do

  create_table "appointments", force: :cascade do |t|
    t.integer "patient_id"
    t.integer "doctor_id"
    t.datetime "time"
  end

  create_table "departments", force: :cascade do |t|
    t.string "name"
  end

  create_table "doctors", force: :cascade do |t|
    t.string "name"
    t.integer "department_id"
  end

  create_table "patients", force: :cascade do |t|
    t.string "name"
    t.string "condition"
  end

end
