require 'sinatra'
require 'sinatra/reloader'
require './lib/helpers'

get '/' do
  erb :index
end

get '/send_specs' do
  "You can't do this."
end

post '/send_specs' do
  format_specs_sheet
  erb :thankyou
end
