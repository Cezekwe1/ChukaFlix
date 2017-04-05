class User < ApplicationRecord


  attr_reader :password

  validates :username, :password_digest, :session_token ,:email, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  has_many :profiles
  after_initialize :ensure_session_token
  before_validation :ensure_session_uniqueness

  def self.find_by_credentials(email,password)
    user = find_by(email: email)
    return nil unless user
    user.is_password?(password) ?  user : nil
  end

  def password=(password)
    pass = BCrypt::Password.create(password)
    self.password_digest = pass if pass
    @password = password
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    ensure_session_uniqueness
    return self.session_token if self.save
  end

  def is_password?(password1)
    BCrypt::Password.new(self.password_digest).is_password?(password1)
  end

  def selected_profile(id)
    self.profiles.each do |profile|
      return profile if profile.id == id
    end
  end


  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def self.generate_session_token
    SecureRandom.base64
  end

  def ensure_session_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = User.generate_session_token
    end
  end

end
