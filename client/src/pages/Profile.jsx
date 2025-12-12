import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  const { email } = useParams();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <>
      <h1>Hello User</h1>
      <h2>Email: {email}</h2>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Profile;
