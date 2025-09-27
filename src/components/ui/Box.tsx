import { View, Text } from "react-native";
import React from "react";
type PropsType = {
  children: React.ReactNode;
};

const Header = ({ children }: PropsType) => {
  return (
    <View>
      {typeof children === "string" ? <Text style={{fontSize:24}}>{children}</Text> : children}
    </View>
  );
};
const Body = ({ children }: PropsType) => {
  return (
    <View>
      {typeof children === "string" ? <Text style={{fontSize:16}}>{children}</Text> : children}
    </View>
  );
};

const Box = ({ children }: PropsType) => {
  return <View style={{padding:12,gap:12}}>{children}</View>;
};

Box.Header = Header;
Box.Body = Body;

export default Box;
