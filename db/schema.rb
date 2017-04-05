# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170402181538) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "episodes", force: :cascade do |t|
    t.integer  "serie_id",           null: false
    t.string   "title",              null: false
    t.text     "description",        null: false
    t.string   "video_url",          null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.integer  "episode_number"
    t.index ["serie_id"], name: "index_episodes_on_serie_id", using: :btree
    t.index ["title"], name: "index_episodes_on_title", using: :btree
  end

  create_table "favorites", force: :cascade do |t|
    t.integer  "profile_id", null: false
    t.integer  "serie_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id"], name: "index_favorites_on_profile_id", using: :btree
    t.index ["serie_id"], name: "index_favorites_on_serie_id", using: :btree
  end

  create_table "genres", force: :cascade do |t|
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_genres_on_title", using: :btree
  end

  create_table "profiles", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_profiles_on_user_id", using: :btree
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "profile_id", null: false
    t.integer  "serie_id",   null: false
    t.integer  "rating",     null: false
    t.text     "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id"], name: "index_reviews_on_profile_id", using: :btree
    t.index ["rating"], name: "index_reviews_on_rating", using: :btree
    t.index ["serie_id"], name: "index_reviews_on_serie_id", using: :btree
  end

  create_table "series", force: :cascade do |t|
    t.string   "title",                              null: false
    t.text     "description",                        null: false
    t.integer  "avg_rating",         default: 0
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
    t.integer  "genre_id"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.integer  "year"
    t.boolean  "movie",              default: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                    null: false
    t.string   "password_digest",             null: false
    t.string   "session_token",               null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.string   "email",                       null: false
    t.integer  "profile_number",  default: 5
    t.integer  "cp",              default: 0
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
