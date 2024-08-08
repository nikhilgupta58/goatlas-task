import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import AuthGate from "../components/AuthGate/view";
import { AuthGateTypes } from "../utils/constants";

export default function Modal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [type, setType] = useState<AuthGateTypes>(AuthGateTypes.LOGIN);

  useEffect(() => {
    setType(AuthGateTypes.LOGIN);
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <>
          <div className="blur-md absolute p-0 m-0 bg-black opacity-50 top-0 left-0 w-[100dvw] z-10 h-[100dvh]" />
          <div className="top-0 left-0 flex justify-center rounded-full items-center w-[100dvw] h-[100dvh] absolute z-20">
            <div className="max-w-[90vw] relative">
              <AuthGate type={type} setType={setType} onSubmit={onClose} />
              <div
                onClick={onClose}
                className="min-w-[32px] cursor-pointer flex justify-center items-center min-h-[32px] absolute right-4 top-5 bg-dark1 rounded-full z-30"
              >
                <IoMdClose size={16} className="text-white" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
