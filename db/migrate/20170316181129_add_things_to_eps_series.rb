class AddThingsToEpsSeries < ActiveRecord::Migration[5.0]
  def self.up
    change_table :episodes do |t|
      t.attachment :image
    end

    change_table :series do |t|
      t.attachment :image
    end
    add_column :series, :year, :integer
    add_column :series, :movie, :boolean, default: false
  end

  def self.down
    remove_attachment :episodes, :image
    remove_attachment :series, :image
    remove_column :series, :year, :integer
    remove_column :series, :movie, :boolean, default: false
  end
end
