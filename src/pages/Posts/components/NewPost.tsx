import { useState } from "react";
import Button from "../../../shared/Button";
import Modal from "../../../shared/Modal";
import Text from "../../../shared/Text";
import { postClass, postInsideBoxClass } from "../utils";

export default function NewPost() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className={postClass}>
        <Text stylearr={[18, 22, 500]} className="text-lightGray">
          Create post
        </Text>
        <div className="flex flex-col gap-3 items-end">
          <div
            className={`${postInsideBoxClass} w-full items-center flex gap-4`}
          >
            <div className="w-[48px] h-[48px] rounded-full bg-dark2 items-center justify-center flex text-[18px]">
              💬
            </div>
            <Text stylearr={[16, 16, 400]} className="text-gray2">
              How are you feeling today?
            </Text>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="w-[111px] text-white bg-blueAccent h-[43px] rounded-[4px]"
          >
            Post
          </Button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
