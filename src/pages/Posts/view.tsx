import Text from "../../shared/Text";
import NewPost from "./components/NewPost";
import Post from "./components/Post";
import { all_posts } from "./utils";
export default function Posts() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <Text stylearr={[28, 33, 500]} className="text-lightGray">
          Hello Jane
        </Text>
        <Text stylearr={[16, 24, 400]} className="text-gray2 max-w-[580px]">
          How are you doing today? Would you like to share something with the
          community 🤗
        </Text>
      </div>
      <div className="flex flex-col gap-3">
        <NewPost />
        {all_posts.map((post, id) => (
          <Post key={id} post={post} />
        ))}
      </div>
    </div>
  );
}
