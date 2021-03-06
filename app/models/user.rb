class User < ApplicationRecord
  validates :username, :password_digest, :session_token, :email, :first_name, :last_name, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :lists,
    class_name: "List",
    foreign_key: :author_id,
    dependent: :destroy

  has_many :tasks,
    class_name: "Task",
    foreign_key: :author_id,
    dependent: :destroy

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user && user.is_password?(password) ? user : nil

  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
