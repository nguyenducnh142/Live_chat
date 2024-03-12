import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../Component/miscellaneous/SideDrawer";
import MyChats from "../Component/MyChats";
import ChatBox from "../Component/ChatBox";
import { Box } from "@chakra-ui/layout";
import { useState } from "react";

const Chatpage = () => {
  const { user } = ChatState();
  const { fecthAgain, setFecthAgain } = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats fecthAgain={fecthAgain} />}
        {user && (
          <ChatBox fetchAgain={fecthAgain} setFetchAgain={setFecthAgain} />
        )}
      </Box>
    </div>
  );
};
export default Chatpage;
