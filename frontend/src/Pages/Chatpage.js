import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../Component/miscellaneous/SideDrawer";
import MyChats from "../Component/MyChats";
import ChatBox from "../Component/ChatBox";
import { Box } from "@chakra-ui/layout";

const Chatpage = () => {
  const { user } = ChatState();

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
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};
export default Chatpage;
