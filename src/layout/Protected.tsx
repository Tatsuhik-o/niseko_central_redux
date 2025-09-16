import { Outlet } from "react-router-dom";

export default function Protected() {
  return (
    <div>
      <div>Protected</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
