import { RxChatBubble, RxDotsHorizontal } from "react-icons/rx";
import Text from "../../../shared/Text";
import { POST } from "../../../utils/interfaces";
import { postClass, postInsideBoxClass } from "../utils";

export default function Post({ post }: { post: POST }) {
  return (
    <div className={postClass}>
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-2">
          <img
            src={post.profile_picture}
            className="w-[44px] h-[44px] rounded-full object-cover"
          />
          <div className="gap-1 flex flex-col">
            <Text stylearr={[16, 20, 500]} className="text-lightGray">
              {post.name}
            </Text>
            <Text stylearr={[14, 16, 500]} className="text-gray2">
              {post.created_at} {post.edited && `• Edited`}
            </Text>
          </div>
        </div>
        <RxDotsHorizontal className="text-lightGray cursor-pointer" />
      </div>
      <div className="flex flex-col gap-2">
        <div className={`${postInsideBoxClass} w-full flex gap-4`}>
          <div className="min-w-[48px] max-w-[48px] min-h-[48px] max-h-[48px] rounded-full bg-dark2 items-center justify-center flex text-[18px]">
            {post.emoji}
          </div>
          <Text stylearr={[16, 24, 400]} className="text-gray2">
            {post.comment}
          </Text>
        </div>
        <div className="flex items-center gap-2">
          <RxChatBubble size={20} className="text-lightGray" />
          <Text className="text-gray2" stylearr={[14, 17, 500]}>
            {post.comments_count} comments
          </Text>
        </div>
      </div>
    </div>
  );
}
