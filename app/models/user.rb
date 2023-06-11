class User < ApplicationRecord
    validates :name, presence:true
    validates :authir,presence:true

end
