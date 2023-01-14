import { useNavigate } from "react-router-dom";

const Patient = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      <div>
        <h1 className="header text-gray-700 text-center md:my-8 my-4">
          Patient History
        </h1>
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Patient;
