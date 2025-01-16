import { HiPencilSquare } from "react-icons/hi2";

interface NewPostBtnProps {
  onClick: () => void;
}

const NewPostButton: React.FC<NewPostBtnProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white text-indigo-600 px-6 py-2 rounded flex items-center gap-2 hover:bg-opacity-90 transition-all duration-300 ease-out font-medium shadow-md"
    >
      <HiPencilSquare className="w-5 h-5" />
      <span className="font-bold">新規投稿</span>
    </button>
  );
};

export default NewPostButton;