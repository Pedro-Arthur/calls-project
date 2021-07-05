import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

function Dashboard() {
  const { signOut } = useContext(AuthContext);

  return (
    <div>
      <p>Dashboard</p>

      <button type="button" onClick={() => signOut()}>
        Sair
      </button>
    </div>
  );
}

export default Dashboard;
