class CreateCategories < ActiveRecord::Migration[5.0]
  def up
    create_table :categories do |t|
      t.string :name

      t.timestamps
    end

    Category.create!(name: 'Hobby')
    Category.create!(name: 'Personal')
    Category.create!(name: 'Finance')
  end

  def down
    drop_table :categories
  end
end
