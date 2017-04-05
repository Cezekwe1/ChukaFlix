class AddCpColumn < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :cp, :integer, default: 0
  end
end