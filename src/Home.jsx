import { useState } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();
  const handleJoin = () => {
    navigate(`/room/${roomId}`);
  };
  return (
    <div>
      <input value={roomId} onChange={(e) => setRoomId(e.target.value)} />
      <button onClick={handleJoin}>Join</button>
    </div>
  );
};

export default Home;
