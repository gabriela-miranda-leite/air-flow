import { signOut } from "firebase/auth";
import { auth } from "../../auth/firebase";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const history = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then((data) => {
      console.log(data);
      history("/");
    });
  };
  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </>
  );
};
