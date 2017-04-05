json.extract! user, :id, :username, :email, :cp

json.profiles  user.profiles do |profile|
  json.partial! 'api/profiles/profile.json.jbuilder', profile: profile
end
