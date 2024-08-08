import { Outlet } from "react-router-dom";

const Public: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Public;
