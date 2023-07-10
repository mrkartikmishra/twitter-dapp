import React from "react";

import { Search } from "@web3uikit/icons";

const Rightbar = () => {
  const trendingTweets = [
    {
      text: "NFTs redefine art world: digital collectibles gain mainstream attention.",
      imageUrl:
        "https://assets.entrepreneur.com/content/3x2/2000/1647397792-nft-art2.jpg?format=pjeg&auto=webp&crop=16:9",
      link: "#",
    },
    {
      text: "DeFi revolutionizes finance: decentralized lending, borrowing, and yield farming.",
      imageUrl:
        "https://uploads-ssl.webflow.com/5eb90728dc345d1fe8bed774/60a3be63838a9a42d20e6407_How%20DeFi%20Can%20Transform%20Your%20Business%20and%20Bring%20Scalability.jpg",
      link: "#",
    },
    {
      text: "Blockchain gaming rises: play-to-earn and ownership of in-game assets.",
      imageUrl:
        "https://sensoriumxr.com/static/Top_Blockchain_Games_53620d0c93.jpg",
      link: "#",
    },
    {
      text: "Companies explore blockchain adoption: supply chain transparency and traceability.",
      imageUrl:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.stellium.com/wp-content/uploads/2019/08/Picture1.png",
      link: "#",
    },
    {
      text: "Crypto regulations heat up: governments grapple with cryptocurrency policies.",
      imageUrl:
        "https://www.analyticsinsight.net/wp-content/uploads/2021/05/AdobeStock_288803828-1-1536x864.jpeg",
      link: "#",
    },
  ];
  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed hidden sm:block top-0 right-0 z-40 w-72 h-screen pt-16 transition-transform -translate-x-full border-l sm:translate-x-0 bg-gray-800 border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col px-3 pb-4 overflow-y-auto bg-gray-700 rounded-md">
          <input
            placeholder="Search..."
            prefixIcon={<Search />}
            labelBgColor="#141d26"
            className="mb-10 mt-5 bg-gray-800 p-1 rounded-lg text-sm text-white"
          />
          {trendingTweets.map((trends) => (
            <div className="flex items-center justify-between gap-3 mb-5">
              <img
                src={trends.imageUrl}
                className="w-24 object-cover hover:scale-105"
                onClick={window.open(trends.link)}
              />
              <p className="text-xs text-white font-sans">{trends.text}</p>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Rightbar;
