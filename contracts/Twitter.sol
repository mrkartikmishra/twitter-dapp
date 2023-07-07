// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Twitter {
    address public owner;
    uint256 private counter;

    constructor() {
        owner = msg.sender;
        counter = 0;
    }

    struct Tweet {
        address twitter;
        uint256 id;
        string tweetText;
        string tweetImgUrl;
        bool isDeleted;
        uint256 timestamp;
    }

    struct User {
        string username;
        string bio;
        string profileImgUrl;
        string profileBannerUrl;
    }

    mapping(uint256 => Tweet) tweets;
    mapping(address => User) users;

    event TweetCreated(
        address twitter,
        uint256 id,
        string tweetText,
        string tweetImgUrl,
        bool isDeleted,
        uint256 timestamp
    );

    event TweetDeleted(uint256 id, bool isDeleted);

    function addTweet(
        string memory _tweetText,
        string memory _tweetImgUrl
    ) public payable {
        require(
            msg.value == (0.01 ether),
            "0.01 MATIC is required to post a Tweet"
        );

        Tweet storage newTweet = tweets[counter];

        newTweet.tweetText = _tweetText;
        newTweet.tweetImgUrl = _tweetImgUrl;
        newTweet.twitter = msg.sender;
        newTweet.isDeleted = false;
        newTweet.id = counter;
        newTweet.timestamp = block.timestamp;

        emit TweetCreated(
            msg.sender,
            counter,
            _tweetText,
            _tweetImgUrl,
            false,
            block.timestamp
        );
        counter++;

        (bool sent, ) = owner.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }

    function fetchAllTweets() public view returns (Tweet[] memory) {
        Tweet[] memory tempTweets = new Tweet[](counter);

        uint256 tempCount = 0;

        for (uint256 i = 0; i < counter; i++) {
            if (tweets[i].isDeleted == false) {
                tempTweets[tempCount] = tweets[i];
                tempCount++;
            }
        }

        Tweet[] memory finalTweets = new Tweet[](tempCount);

        for (uint256 i = 0; i < tempCount; i++) {
            finalTweets[i] = tweets[i];
        }

        return finalTweets;
    }

    function getMyTweets() public view returns (Tweet[] memory) {
        Tweet[] memory tempTweets = new Tweet[](counter);

        uint256 tempCount = 0;

        for (uint256 i = 0; i < counter; i++) {
            if (
                tweets[i].isDeleted == false && tweets[i].twitter == msg.sender
            ) {
                tempTweets[tempCount] = tweets[i];
                tempCount++;
            }
        }

        Tweet[] memory finalTweets = new Tweet[](tempCount);

        for (uint256 i = 0; i < tempCount; i++) {
            finalTweets[i] = tweets[i];
        }

        return finalTweets;
    }

    function getTweet(
        uint256 tweetId
    ) public view returns (string memory, string memory, address) {
        require(
            tweetId < counter || tweetId > counter,
            "No such tweet exists!!"
        );
        Tweet storage tweet = tweets[tweetId];
        require(tweet.isDeleted == false, "Tweet has been deleted!!");
        return (tweet.tweetText, tweet.tweetImgUrl, tweet.twitter);
    }

    function deleteTweet(uint256 tweetId, bool _isDeleted) external {
        require(
            tweets[tweetId].twitter == msg.sender,
            "Tweet owner can only delete a Tweet!!"
        );
        tweets[tweetId].isDeleted = _isDeleted;
        emit TweetDeleted(tweetId, _isDeleted);
    }

    function updateUser(
        string memory _username,
        string memory _bio,
        string memory _profileImgUrl,
        string memory _profilebannerUrl
    ) public {
        User storage user = users[msg.sender];

        user.username = _username;
        user.bio = _bio;
        user.profileImgUrl = _profileImgUrl;
        user.profileBannerUrl = _profilebannerUrl;
    }

    function getUser(address _userAddress) public view returns (User memory) {
        return users[_userAddress];
    }
}
