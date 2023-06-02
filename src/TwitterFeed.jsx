/*
import { useEffect, useState } from "react";
import axios from "axios";
import config from "./config";

const TwitterFeed = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.twitter.com/1.1/statuses/user_timeline.json", {
          params: {
            screen_name: "@resuMe_app2023",
            count: 10,
          },
          headers: {
            Authorization: `Bearer ${config.bearerToken}`,
          },
        });

        setTweets(response.data);
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {tweets.map((tweet) => (
        <div key={tweet.id}>{tweet.text}</div>
      ))}
    </div>
  );
};

export default TwitterFeed;
*/
