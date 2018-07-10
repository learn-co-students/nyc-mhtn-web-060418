ActiveRecord::Schema.define(version: 20_180_710_021_403) do
  create_table 'secrets', force: :cascade do |t|
    t.string 'text'
    t.integer 'author_id'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'users', force: :cascade do |t|
    t.string 'username'
    t.string 'password_digest'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end
end
