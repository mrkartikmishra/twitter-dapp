import { Search } from "@web3uikit/icons";

const trendingTweets = [
  {
    text: "NFTs redefine art world: digital collectibles gain mainstream attention.",
    imageUrl:
      "https://assets.entrepreneur.com/content/3x2/2000/1647397792-nft-art2.jpg?format=pjeg&auto=webp&crop=16:9",
  },
  {
    text: "DeFi revolutionizes finance: decentralized lending, borrowing, and yield farming.",
    imageUrl:
      "https://uploads-ssl.webflow.com/5eb90728dc345d1fe8bed774/60a3be63838a9a42d20e6407_How%20DeFi%20Can%20Transform%20Your%20Business%20and%20Bring%20Scalability.jpg",
  },
  {
    text: "Blockchain gaming rises: play-to-earn and ownership of in-game assets.",
    imageUrl:
      "https://sensoriumxr.com/static/Top_Blockchain_Games_53620d0c93.jpg",
  },
  {
    text: "Companies explore blockchain adoption: supply chain transparency and traceability.",
    imageUrl:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.stellium.com/wp-content/uploads/2019/08/Picture1.png",
  },
  {
    text: "Crypto regulations heat up: governments grapple with cryptocurrency policies.",
    imageUrl:
      "https://www.analyticsinsight.net/wp-content/uploads/2021/05/AdobeStock_288803828-1-1536x864.jpeg",
  },
];

const TrendingPost = () => {
  return (
    <div className="px-5 sm:ml-64 sm:pr-10">
      <aside className="h-screen right-2 pt-16 bg-gray-800 border-gray-700">
        <div className="h-full flex flex-col px-3 pb-4 overflow-y-auto bg-gray-700 rounded-md">
          <input
            placeholder="Search 3333333..."
            prefixIcon={<Search />}
            className="mb-5 mt-5 bg-gray-800 p-1 rounded-lg text-sm text-white focus:outline-none"
          />
          {trendingTweets.map((trends) => (
            <div
              key={trends.text}
              className="flex items-center justify-start gap-3 mb-2"
            >
              <img
                src={trends.imageUrl}
                className="w-32 object-cover hover:scale-105"
              />
              <p className="text-sm text-white font-sans">{trends.text}</p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default TrendingPost;
