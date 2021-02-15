import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Arrow from "../../../assets/down-arrow-black.svg";
import {
  UserContext,
  UserDispatchContext,
} from "../../../context/UserProvider";
import Dropdown from "../../general/dropdown/Dropdown";

const ProfileDropdown = () => {
  const history = useHistory();
  const setUser = useContext(UserDispatchContext);
  const user = useContext(UserContext);
  const signOut = () => {
    localStorage.removeItem("bringToken");
    setUser(false);
    history.push("/login");
  };

  var options = [{ label: "Sign Out", onClick: signOut }];
  if (user && user.isAdmin) {
    options.unshift({
      label: "Manage Users",
      onClick: () => history.push("/admin/manage"),
    });
  }

  return (
    <Dropdown options={options}>
      <DropdownWrapper className="flex-row align">
        <Profile className="profile-circle flex-row align justify">
          <h3 className="text-reg">{user && user.first && user.first[0]}</h3>
        </Profile>
        <ArrowImg
          className="profile-arrow"
          src={Arrow}
          alt="Profile dropdown arrow"
        />
      </DropdownWrapper>
    </Dropdown>
  );
};

export default ProfileDropdown;

const DropdownWrapper = styled.div`
  &:hover {
    .profile-arrow {
      opacity: 0.5;
    }
    .profile-circle {
      box-shadow: 0 0 3px #4a4a4a;
    }
  }
`;

const Profile = styled.div`
  border-radius: 100px;
  height: 38px;
  width: 38px;
  background: #e0e0e0;
`;

const ArrowImg = styled.img`
  height: 20px;
  opacity: 0.3;
`;
