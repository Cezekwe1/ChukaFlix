class AddProfileColumn < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :profile_number, :integer, default: 5
    rename_column :favorites, :user_id, :profile_id
  end
end
