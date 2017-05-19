# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

all_users = [
  User.create!({
    email: 'guest@guest.com',
    username: 'guest',
    password: 'guestpass'
  })
]

Genre.destroy_all

all_genres = [
  #0
  Genre.create!(title: "Anime"),
  #1
  Genre.create!(title: "Detective"),
  #2
  Genre.create!(title: "Comedies"),
  #3
  Genre.create!(title: "Action and Adventure"),
  #4
  Genre.create!(title: "Sci-fi"),
  #5
  Genre.create!(title: "Romantic-Comedies")

]


Serie.destroy_all

all_series = [
  Serie.create!({
    title: 'Inuyasha',
    description: 'Story about a Half Demon trying to become a full demon.',
    year: 2000,
    image: File.open('app/assets/images/series/inuyasha.jpg'),
    genre_id: all_genres[0].id
  }),

  Serie.create!({
    title: 'Bleach',
    description: 'Ichigo Kurosaki obtains the power Soul Reaper.',
    year: 2004,
    image: File.open('app/assets/images/series/bleach.jpg'),
    genre_id: all_genres[0].id
  }),

  Serie.create!({
    title: 'Dragon Ball Z',
    description: 'Story about a Saiyan named Kakarot.',
    year: 1989,
    image: File.open('app/assets/images/series/dbz.jpg'),
    genre_id: all_genres[0].id
  }),

  Serie.create!({
    title: 'Luther',
    description: 'D.C.I Luther is a top-notch British investigator.',
    year: 2010,
    image: File.open('app/assets/images/Luther.jpg'),
    genre_id: all_genres[1].id
  }),

  Serie.create!({
    title: 'Sherlock',
    description: 'Classic Story of Detective who lived in 21 Baker Street.',
    year: 2015,
    image: File.open('app/assets/images/series/sherlock.jpg'),
    genre_id: all_genres[1].id
  }),

  Serie.create!({
    title: 'Marcella',
    description: 'D.C.I Marcella is a detective with a secret.',
    year: 2015,
    image: File.open('app/assets/images/series/marcella.jpg'),
    genre_id: all_genres[1].id
  }),

  Serie.create!({
    title: 'The Office',
    description: 'Small Paper company in Scranton PA with some big personalities.',
    year: 2005,
    image: File.open('app/assets/images/series/office.jpg'),
    genre_id: all_genres[2].id
  }),

  Serie.create!({
    title: 'Parks and Recreation',
    description: 'Pawnee Indiana is home to the Best Parks department in the world.',
    year: 2008,
    image: File.open('app/assets/images/series/parks.jpg'),
    genre_id: all_genres[2].id
  }),

  Serie.create!({
    title: 'Family Guy',
    description: 'Quahog Rhode Island is home to the griffins a loveable typical american family.',
    year: 1999,
    image: File.open('app/assets/images/series/family.jpg'),
    genre_id: all_genres[2].id
  }),

  Serie.create!({
    title: 'Luke Cage',
    description: 'Superhero Luke Cage tries to save Harlem.',
    year: 2016,
    image: File.open('app/assets/images/series/luke.jpg'),
    genre_id: all_genres[3].id
  }),

  Serie.create!({
    title: 'Daredevil',
    description: 'Murdock juggles being a masked hero, a lawyer, and a friend.',
    year: 2015,
    image: File.open('app/assets/images/series/devil.jpg'),
    genre_id: all_genres[3].id
  }),

  Serie.create!({
    title: 'The Punisher',
    description: 'Haunted by the battlefield the punisher deals out his own version of justice.',
    year: 2017,
    image: File.open('app/assets/images/series/punisher.jpg'),
    genre_id: all_genres[3].id
  }),

  Serie.create!({
    title: 'Flower Girl',
    description: 'Feeling the urge to get married a florist devises a plan to make her boyfriend propose.',
    year: 2013,
    image: File.open('app/assets/images/series/flower.jpg'),
    genre_id: all_genres[5].id
  }),

  Serie.create!({
    title: '2 Days in New York',
    description: 'A manhattan couple with kids from previous relationships fight to balance life.',
    year: 2012,
    image: File.open('app/assets/images/series/ny.jpg'),
    genre_id: all_genres[5].id
  }),

  Serie.create!({
    title: 'Meet the Patels',
    description: 'Ravi patel is an almost thirty indian man that seeks the help of his parents to get married.',
    year: 2014,
    image: File.open('app/assets/images/series/patel.jpg'),
    genre_id: all_genres[5].id
  }),

  Serie.create!({
    title: '3 percent',
    description: 'Dystopian society where only 3 percent of the population lives in splendor.',
    year: 2016,
    image: File.open('app/assets/images/series/3.jpg'),
    genre_id: all_genres[4].id
  }),

  Serie.create!({
    title: 'Black Mirror',
    description: 'A collection of science fiction thrillers.',
    year: 2016,
    image: File.open('app/assets/images/series/mirror.jpg'),
    genre_id: all_genres[4].id
  }),

  Serie.create!({
    title: 'The OA',
    description: 'Missing girl is found but isnt quite the same anymore.',
    year: 2017,
    image: File.open('app/assets/images/series/oa.jpg'),
    genre_id: all_genres[4].id
  }),

  Serie.create!({
    title: 'Samurai Champloo',
    description: 'Lone samurai tries to find his way.',
    year: 2004,
    image: File.open('app/assets/images/series/champloo.jpg'),
    genre_id: all_genres[0].id
  }),

  Serie.create!({
    title: 'Samurai Jack ',
    description: 'Samurai Jack is trying kill Apu.',
    year: 2001,
    image: File.open('app/assets/images/series/jack.jpg'),
    genre_id: all_genres[0].id
  }),

  Serie.create!({
    title: 'One Piece',
    description: 'Story about a pirate.',
    year: 1999,
    image: File.open('app/assets/images/series/piece.jpg'),
    genre_id: all_genres[0].id
  }),

  Serie.create!({
    title: 'True Detective',
    description: 'Detectives try and solve a new case every season.',
    year: 2014,
    image: File.open('app/assets/images/series/true-detective.jpg'),
    genre_id: all_genres[1].id
  }),

  Serie.create!({
    title: 'Monk',
    description: 'Odd man solves cases.',
    year: 2002,
    image: File.open('app/assets/images/series/monk.jpg'),
    genre_id: all_genres[1].id
  }),

  Serie.create!({
    title: 'Law and Order: SVU',
    description: 'Hard-boiled New York detectives solve crimes',
    year: 1999,
    image: File.open('app/assets/images/series/svu.jpg'),
    genre_id: all_genres[1].id
  }),

  Serie.create!({
    title: "Bob's Burgers",
    description: 'A quirky family owns burger joint.',
    year: 2011,
    image: File.open('app/assets/images/series/bob.jpg'),
    genre_id: all_genres[2].id
  })

]

Episode.destroy_all

all_episodes = [
  # Inuyasha
  Episode.create!({
    title: "The Girl Who Overcame Time... and the Boy Who Was Just Overcome",
    description: 'Series opener, Inuyasha a half demon is on a mission become a full-fledged demon.',
    serie_id: all_series[0].id,
    image: File.open('app/assets/images/episodes/inuyasha/inuyasha-episode-1.jpg'),
    video_url: 'AfYHrMNLE94',
    episode_number: 1
  }),

  Episode.create!({
    title: "Seekers of the Sacred Jewel",
    description: 'Inuyasha begins his quest to find sacred jewel.',
    serie_id: all_series[0].id,
    image: File.open('app/assets/images/episodes/inuyasha/inuyasha-episode-2.jpg'),
    video_url: 'u8gENsq3K7s',
    episode_number: 2
  }),

  # bleach
  Episode.create!({
    title: "The Day I Became a Shinigami",
    description: 'Series opener.',
    serie_id: all_series[1].id,
    image: File.open('app/assets/images/episodes/bleach/bleach-episode-1.jpg'),
    video_url: 'mPEwQdlKpr4',
    episode_number: 1
  }),
  #  dbz
  Episode.create!({
    title: "Arrival of Raditz",
    description: 'Raditz brother of Goku comes to earth.',
    serie_id: all_series[2].id,
    image: File.open('app/assets/images/episodes/dbz/dbz-episode-1.jpg'),
    video_url: 'A23WwNCoaMU',
    episode_number: 1
  }),

  # luther
  Episode.create!({
    title: "Episode 1",
    description: 'Luther meets Alice.',
    serie_id: all_series[3].id,
    image: File.open('app/assets/images/episodes/luther/luther-episode-1.jpg'),
    video_url: 'vTZvxT03y1U',
    episode_number: 1
  }),
  # sherlock
  Episode.create!({
    title: "A Study in Pink",
    description: 'Sherlock investigates suspicious suicides.',
    serie_id: all_series[4].id,
    image: File.open('app/assets/images/episodes/sherlock/sherlock-episode-1.jpg'),
    video_url: '7hjPxUfV32Q',
    episode_number: 1
  }),
  # marcella
  Episode.create!({
    title: "Episode One",
    description: 'Marcella is devasted by the lost of her husband.',
    serie_id: all_series[5].id,
    image: File.open('app/assets/images/episodes/marcella/marcella-episode-1.jpg'),
    video_url: 'Ue3YCm6NGTw',
    episode_number: 1
  }),
  # the office
  Episode.create!({
    title: "Pilot",
    description: 'Introduction to Dunder Mifflin.',
    serie_id: all_series[6].id,
    image: File.open('app/assets/images/episodes/office/office-episode-1.jpg'),
    video_url: 'lQYzT49hyKo',
    episode_number: 1
  }),
  # parks and recreation
  Episode.create!({
    title: "Pilot",
    description: 'Welcome to Pawnee Indiana.',
    serie_id: all_series[7].id,
    image: File.open('app/assets/images/episodes/parks_and_rec/parks-episode-1.jpg'),
    video_url: 'cNlL9FWs_KA',
    episode_number: 1
  }),
  # family guy
  Episode.create!({
    title: "Death has a Shadow",
    description: 'Meet the griffins.',
    serie_id: all_series[8].id,
    image: File.open('app/assets/images/episodes/family/family-episode-1.jpg'),
    video_url: 'rB_VUVUA_QI',
    episode_number: 1
  }),
  # luke cage
  Episode.create!({
    title: "Moment of Truth",
    description: 'meet luke cage.',
    serie_id: all_series[9].id,
    image: File.open('app/assets/images/episodes/luke_cage/cage-episode-1.jpg'),
    video_url: 'ytkjQvSk2VA',
    episode_number: 1
  }),
  # daredevil
  Episode.create!({
    title: "Into the Ring",
    description: 'Meet Mat Murdock.',
    serie_id: all_series[10].id,
    image: File.open('app/assets/images/episodes/daredevil/daredevil-episode-1.jpg'),
    video_url: 'm5_A0Wx0jU4',
    episode_number: 1
  }),
  # the punisher
  Episode.create!({
    title: "Episode 1",
    description: 'Meet Frank Castle.',
    serie_id: all_series[11].id,
    image: File.open('app/assets/images/episodes/punisher/punisher-episode-1.jpg'),
    video_url: 'SkPSY5TZEfw',
    episode_number: 1
  }),
  # flower girl
  Episode.create!({
    title: "The Flower Girl",
    description: 'Story of love.',
    serie_id: all_series[12].id,
    image: File.open('app/assets/images/episodes/flower_girl/flower-episode-1.png'),
    video_url: 'mlQFe67l2A4',
    episode_number: 1
  }),
  # 2 days in new york
  Episode.create!({
    title: "2 days in New York",
    description: 'Life and love in the big city',
    serie_id: all_series[13].id,
    image: File.open('app/assets/images/episodes/2_days_in_ny/ny-episode-1.jpg'),
    video_url: 'wdHMpFzKNAI',
    episode_number: 1
  }),
  # meet the patels
  Episode.create!({
    title: "Meet the Patels",
    description: 'He is running out of time.',
    serie_id: all_series[14].id,
    image: File.open('app/assets/images/episodes/patels/patel-episode-1.jpg'),
    video_url: '7litSYXbpRs',
    episode_number: 1
  }),
  # 3 percent
  Episode.create!({
    title: "Pilot",
    description: 'A new set of contestants are chosen for the game.',
    serie_id: all_series[15].id,
    image: File.open('app/assets/images/episodes/percent/3-episode-1.jpeg'),
    video_url: '8yyzNQfaQR8',
    episode_number: 1
  }),
  # black mirror
  Episode.create!({
    title: "National Anthem",
    description: 'Prime minister is faced with a decision.',
    serie_id: all_series[16].id,
    image: File.open('app/assets/images/episodes/mirror/mirror-episode-1.jpg'),
    video_url: 'jDiYGjp5iFg',
    episode_number: 1
  }),
  # the oa
  Episode.create!({
    title: "Homecoming",
    description: 'prairie finally returns.',
    serie_id: all_series[17].id,
    image: File.open('app/assets/images/episodes/oa/oa-episode-1.jpg'),
    video_url: 'DvHJtez2IlY',
    episode_number: 1
  }),

# new additions 
  Episode.create!({
    title: "Tempestuous Temperments",
    description: 'Introduction.',
    serie_id: all_series[18].id,
    image: File.open('app/assets/images/episodes/champloo/champloo-episode-1.jpg'),
    video_url: 'eQkSi3P3K6A',
    episode_number: 1
  }),

  Episode.create!({
    title: "The Begininng",
    description: 'The hero Jack is looking for Apu.',
    serie_id: all_series[19].id,
    image: File.open('app/assets/images/episodes/jack/jack-episode-1.jpg'),
    video_url: 'vMyScF0ccV4',
    episode_number: 1
  }),

  Episode.create!({
    title: "I'm Gonna be King of Pirates",
    description: 'Meet the Pirates.',
    serie_id: all_series[20].id,
    image: File.open('app/assets/images/episodes/piece/piece-episode-1.jpg'),
    video_url: 'WO_kvM6SRYs',
    episode_number: 1
  }),

  Episode.create!({
    title: "The Long Bright Dark",
    description: 'Mysterious case sends partners on a goose chase.',
    serie_id: all_series[21].id,
    image: File.open('app/assets/images/episodes/true/true-episode-1.jpg'),
    video_url: 'aMuRZGPbz7U',
    episode_number: 1
  }),

  Episode.create!({
    title: "The Monk and the Candidate",
    description: 'Monk is an odd fellow solving death of politician.',
    serie_id: all_series[22].id,
    image: File.open('app/assets/images/episodes/monk/monk-episode-1.jpg'),
    video_url: 'RSv1rNthRV4',
    episode_number: 1
  }),

  Episode.create!({
    title: "Payback",
    description: 'Meet the detectives.',
    serie_id: all_series[23].id,
    image: File.open('app/assets/images/episodes/svu/svu-episode-1.jpg'),
    video_url: 'QnZeWuxju_g',
    episode_number: 1
  }),
  Episode.create!({
    title: "Human Flesh",
    description: 'Bob gets accused of serving human flesh.',
    serie_id: all_series[24].id,
    image: File.open('app/assets/images/episodes/bob/bob-episode-1.jpg'),
    video_url: 'kUAxHYrLBkg',
    episode_number: 1
  })
]
Review.destroy_all
Profile.destroy_all

all_profiles =[
  Profile.create!({
      user_id: all_users[0].id,
      name: "Chuka"
    })
]
