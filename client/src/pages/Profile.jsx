import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = fetch(`http://localhost:5000/${sessionId}`);
        const data = await response.json();
        if (data.ok) {
          setEmail(data.sessionId);
        } else {
          console.log(data.useParams);
        }
      } catch (err) {
        console.error(err);
      }
    }
    // callback
    fetchProfile();
  }, [sessionId]);

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
