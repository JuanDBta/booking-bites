class CreateSections < ActiveRecord::Migration[7.0]
  def change
    create_table :sections do |t|
      t.string :name
      t.string :image
      t.text :description
      t.integer :capacity
      t.boolean :cover
      t.boolean :live_music
      t.references :restaurant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
