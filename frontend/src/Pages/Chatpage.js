import React, { useEffect, useState } from "react";
import axios from "axios";

const Chatpage = () => {
  const [chat, setChat] = useState([]);
  const fetch = async () => {
    const { data } = await axios.get("/api/chat");
    setChat(data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <div>
        {chat.map((chat) => (
          <div key={chat._id}>{chat.chatName} </div>
        ))}
      </div>
    </div>
  );
};
export default Chatpage;
