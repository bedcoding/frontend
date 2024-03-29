import React from "react"
import ChatComponent from "../../../components/tab/chat/Chat"
import { Header } from "react-native-elements"
const Chat = ({ navigation }) => {
  return <ChatComponent navigation={navigation} />
}
Chat.navigationOptions = (screenProps) => ({
  header: (
    <Header
      placement="left"
      leftComponent={{ icon: "menu", color: "#636FF6", onPress: () => screenProps.navigation.openDrawer() }}
      centerComponent={{ text: "MY TITLE", style: { color: "#111111" } }}
      //rightComponent={{ icon: "home", color: "#fff" }}
      containerStyle={{
        backgroundColor: "#fff",
        justifyContent: "space-around",
      }}
    />
  ),
})

export default Chat
