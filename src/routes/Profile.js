import React from "react";
import { authService } from "fbase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const onLogOutClick = async () => {
    authService.signOut();
    navigate("/");
  };
  return <button onClick={onLogOutClick}>Log out</button>;
};
export default Profile;
