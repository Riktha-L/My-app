import './Profile.css';
function ProfileDetails({ name, email, phoneno, bio }) {
  return (
    <div className="CardDetails">
      <h4>Profile Details</h4>
      <p className="Name">Name: {name}</p>
      <p className="Mail">Email: {email}</p>
      <p className="Num">Phone No: {phoneno}</p>
      <p className="Bio">Bio: {bio}</p>
    </div>
  );
}
export default ProfileDetails;
