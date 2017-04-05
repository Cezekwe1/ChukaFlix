export const setCurrentProfile = (profile) => {
  return $.ajax({
    method: 'POST',
    url: 'api/current_profile',
    data: {profile:{ id: profile.id}}
  })
}

export const makeProfile = (name) => {
  return $.ajax({
    method: 'POST',
    url: 'api/profiles',
    data: {profile:{ name: name}}
  })
}

export const destroyProfile = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/profiles/${id}`
  })
}
