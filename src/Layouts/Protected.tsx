import { Outlet } from "react-router-dom";

const Protected: React.FC = () => {
  return (
    <div className="bg-dark1 w-[100dvw] flex h-[100dvh] overflow-y-auto justify-center">
      <div className="mx-[8%] max-w-[700px] py-[50px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Protected;
