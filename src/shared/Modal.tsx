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
  const [opacity, setOpacity] = useState<number>(0);
  useEffect(() => {
    if (isOpen) {
      setType(AuthGateTypes.LOGIN);
      setOpacity(100);
    } else {
      setOpacity(0);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <>
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-filter transition-all backdrop-blur-[2px] z-10" />
          <div className="absolute inset-0 flex justify-center items-center z-20">
            <div
              className={`max-w-[90vw] relative transition-all delay-50`}
              style={{
                opacity: opacity,
              }}
            >
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
