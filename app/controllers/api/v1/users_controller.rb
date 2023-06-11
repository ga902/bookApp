class Api::V1::UsersController < ApplicationController
    def create
        users = User.new(users_params)
        if users.save
            render json:{success:"users Created Successfully"}
        else
            render json:{error:users.errors.full_messages}
        end
    end

    def show
        users = User.find(params[:id])
        render json: users
    end
    def index
        userss = User.all
        render json:userss
    end
    def update
        users = User.find(params[:id])
        if users.update(users_params)
            render json:{success:"users Updated Sucessfully"}
        else
            render json:{error:users.errors.full_messages}
        end
    end
    private
    def users_params
        params.require(:user).permit(:name,:author,:pdate)
    end
end
