class RenameReviewUserColumn < ActiveRecord::Migration[5.0]
  def change
    rename_column :reviews, :user_id, :profile_id
  end
end
