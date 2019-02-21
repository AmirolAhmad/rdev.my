class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.references :user, foreign_key: true
      t.string :fullname
      t.string :ic_no
      t.text :address
      t.string :city
      t.string :postcode
      t.string :state
      t.string :phone_number

      t.timestamps
    end
  end
end
