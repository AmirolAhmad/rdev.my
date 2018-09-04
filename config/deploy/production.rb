set :application, 'rdev_production'
set :stage, :production
set :rails_env, :production
set :deploy_to, '/home/deploy/rdev_production'

server 'umrah-mabrur.com', user: 'deploy', roles: %w{web app db job}
