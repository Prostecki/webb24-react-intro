function ProfileCard({ profileCard }) {
  return (
    <div key={profileCard.name} className="profile-card">
      <p>
        Hello, my name is {profileCard.name} and I am {profileCard.age}. I study
        at {profileCard.education}
      </p>
    </div>
  );
}

export default ProfileCard;
