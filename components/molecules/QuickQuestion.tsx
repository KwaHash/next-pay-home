import Link from "next/link";

interface QuickQuestionProps {
  question: string;
  category: string;
  linkUrl: string;
}

const QuickQuestion: React.FC<QuickQuestionProps> = ({ question, category, linkUrl }) => (
  <Link href={linkUrl} className="block bg-white rounded p-4 shadow hover:shadow-lg transition-shadow text-left">
    <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded">
      {category}
    </span>
    <p className="mt-2 text-gray-900">{question}</p>
  </Link>
);

export default QuickQuestion;