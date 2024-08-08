import { Outlet } from "react-router-dom";

const Protected: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Protected;
