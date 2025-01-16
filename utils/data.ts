import { PostProps } from "@/utils/types";

export const initialPosts: PostProps[] = [
  {
    id: 1,
    author: {
      name: "田中さん家族",
      avatar: "/imgs/avatar/01.jpg",
    },
    date: "2時間前",
    title: "二階建ての収納スペースについて相談です",
    content:
      "現在、間取りを検討中なのですが、二階の収納スペースの配置で悩んでいます。子供部屋を2部屋設ける予定なのですが、効率的な収納の配置方法についてアドバイスいただけますでしょうか？",
    image: "/imgs/post/04.jpg",
    likes: 24,
    comments: [
      {
        id: 1,
        author: {
          name: "建築家 山田",
          avatar: "/imgs/avatar/02.jpg",
        },
        content:
          "子供部屋の収納は、成長に合わせて変化できる可変性が重要ですね。クローゼットの中の棚の高さを調整できるようにすることをお勧めします。",
        date: "1時間前",
        likes: 5,
      },
    ],
    tags: ["収納", "間取り", "二階建て"],
  },
  {
    id: 2,
    author: {
      name: "佐藤建築事務所",
      avatar: "/imgs/avatar/02.jpg",
    },
    date: "5時間前",
    title: "自然素材を活用した家づくりのポイント",
    content:
      "自然素材を使用した家づくりで重要なポイントをご紹介します。素材選びから施工方法まで、長年の経験から得られたノウハウをシェアさせていただきます。",
    likes: 156,
    comments: [
      {
        id: 1,
        author: {
          name: "木材専門家 鈴木",
          avatar: "/imgs/avatar/01.jpg",
        },
        content:
          "無垢材の特性を理解することが大切ですね。季節による木材の収縮や膨張を考慮した設計が重要です。",
        date: "3時間前",
        likes: 12,
      },
    ],
    tags: ["自然素材", "設計", "施工方法"],
  },
];

export const posts = [
  {
    id: 1,
    title: "自然素材にこだわった平屋の家",
    image: "/imgs/post/01.jpg",
    author: "田中さん家",
    likes: 234,
    comments: 45,
    tags: ["平屋", "自然素材", "和モダン"],
  },
  {
    id: 2,
    title: "コストを抑えた高性能住宅",
    image: "/imgs/post/02.jpg",
    author: "佐藤さん家",
    likes: 189,
    comments: 32,
    tags: ["コスト削減", "高性能", "省エネ"],
  },
  {
    id: 3,
    title: "二世帯住宅の快適な暮らし",
    image: "/imgs/post/03.jpg",
    author: "鈴木さん家",
    likes: 156,
    comments: 28,
    tags: ["二世帯住宅", "間取り", "収納"],
  },
];
