import { PostProps } from "@/utils/types";

export const popularTopics = [
  { id: 1, category: "収納", title: "子育て世帯の収納アイデア特集" },
  { id: 2, category: "コスト", title: "予算3,000万円で叶える注文住宅" },
  { id: 3, category: "間取り", title: "二世帯住宅の失敗しない間取り" },
  { id: 4, category: "素材", title: "床材の選び方完全ガイド" },
];

export const experts = [
  {
    id: 1,
    name: "山田一郎",
    role: "建築家・一級建築士",
    avatar: "/imgs/avatar/01.jpg",
  },
  {
    id: 2,
    name: "鈴木設計事務所",
    role: "設計事務所",
    avatar: "/imgs/avatar/02.jpg",
  },
  {
    id: 3,
    name: "中村美咲",
    role: "インテリアコーディネーター",
    avatar: "/imgs/avatar/03.jpg",
  },
];

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

export const companies = [
  {
    id: 1,
    name: "自然工房ホーム",
    image: "/imgs/post/01.jpg",
    rating: 4.8,
    location: "東京都世田谷区",
    projects: 450,
    established: 1985,
    type: "工務店",
    description:
      "自然素材にこだわった家づくりを得意とする工務店です。お客様一人一人の理想 に寄り添い、健康的で快適な住まいを提供します。",
    specialties: ["自然素材", "省エネ", "注文住宅", "リフォーム"],
    events: [
      {
        id: 1,
        type: "セミナー",
        title: "自然素材の家づくり勉強会",
        date: "2024年4月15日 14:00-16:00",
        location: "世田谷ショールーム",
        description:
          "自然素材を使った家づくりのメリットや注意点について、実例を交えながら詳しく解説します。",
      },
      {
        id: 2,
        type: "見学会",
        title: "完成見学会",
        date: "2024年4月20日-21日 10:00-17:00",
        location: "世田谷区桜新町",
        description:
          "自然素材をふんだんに使用した新築一戸建ての見学会を開催します。",
      },
    ],
    examples: [
      {
        id: 1,
        title: "自然素材の平屋",
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: 2,
        title: "木のぬくもりを感じる家",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: 3,
        title: "パッシブデザインの家",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    id: 2,
    name: "モダンライフ建設",
    image: "/imgs/post/02.jpg",
    rating: 4.7,
    location: "神奈川県横浜市",
    projects: 320,
    established: 1990,
    type: "ハウスメーカー",
    description:
      "最新の技術と洗練されたデザインで、都市部での暮らしに最適な住まいづくりを提案。高性能と美しさを両立した家づくりが特徴です。",
    specialties: ["デザイン住宅", "狭小住宅", "二世帯住宅", "ZEH"],
    events: [
      {
        id: 1,
        type: "セミナー",
        title: "ZEH住宅セミナー",
        date: "2024年4月22日 13:00-15:00",
        location: "横浜ショールーム",
        description:
          "ゼロエネルギー住宅の仕組みと補助金制度について詳しく解説します。",
      },
    ],
    examples: [
      {
        id: 1,
        title: "モダンな都市型住宅",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: 2,
        title: "スタイリッシュな二世帯住宅",
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: 3,
        title: "デザイナーズ住宅",
        image:
          "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    id: 3,
    name: "匠心ホームズ",
    image: "/imgs/post/03.jpg",
    rating: 4.9,
    location: "埼玉県さいたま市",
    projects: 280,
    established: 1978,
    type: "工務店",
    description:
      "代々受け継がれる伝統的な技術と現代のニーズを組み合わせた家づくり。木の温もりを大切にした和モダンな住まいが人気です。",
    specialties: ["和モダン", "木造住宅", "古民家再生", "パッシブデザイン"],
    events: [
      {
        id: 1,
        type: "見学会",
        title: "和モダン住宅見学会",
        date: "2024年4月29日-30日 10:00-17:00",
        location: "さいたま市浦和区",
        description:
          "伝統的な和の要素を現代的にアレンジした注文住宅の見学会です。",
      },
      {
        id: 2,
        type: "相談会",
        title: "個別相談会",
        date: "2024年5月3日-5日 10:00-17:00",
        location: "浦和ショールーム",
        description: "ベテラン設計士との個別相談会を開催します。",
      },
    ],
    examples: [
      {
        id: 1,
        title: "和モダンの家",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: 2,
        title: "伝統工法の家",
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: 3,
        title: "古民家リノベーション",
        image:
          "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
];

export const areas = ["エリアを選択", "東京都", "神奈川県", "埼玉県", "千葉県"];

export const specialities = [
  "得意分野で絞り込み",
  "自然素材",
  "省エネ住宅",
  "デザイン住宅",
];
