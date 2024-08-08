import { Outlet } from "react-router-dom";
const Public: React.FC = () => {
  return (
    <div className="w-[100dvw] h-[100dvh] bg-dark1 overflow-y-auto flex flex-col justify-center items-center gap-10">
      <img src="/logo.png" className="w-10 h-10" />
      <Outlet />
    </div>
  );
};

export default Public;
