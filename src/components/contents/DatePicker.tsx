import { View, Text, FlatList, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/state";
import dayjs from "dayjs";
import { getWeeks } from "../../utils/getWeeks";
import { useNavigation } from "@react-navigation/native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export const DateTitle = () => {
  const getDay = new Date().getDate();
  const getMonth = new Date().toLocaleString("default", { month: "short" });
  return (
    <View style={{ flexDirection: "row", alignItems: "flex-end", gap: 5 }}>
      <Text style={{ fontSize: 36, fontWeight: "bold" }}>Today</Text>
      <Text style={{ fontSize: 36, color: "gray", fontWeight: "bold" }}>
        , {getMonth + getDay}
      </Text>
    </View>
  );
};
const DateItem = ({
  keyDay,
  day,
  date,
  dayStr
}: {
  keyDay: string;
  day: string;
  date: any;
  dayStr: string;
}) => {
  const dispatch = useAppDispatch();
  const {selectedDate} = useAppSelector((state) => state.date);
  const navigation = useNavigation()
  const nowDate = dayjs().format("DD-MM-YYYY");
  const handlePress = () => {
    dispatch({ type: "date/selectedDate", payload: {
      selectedDate: date,
      selectedDay: dayStr
    } });
    navigation.navigate("TaskModal" as never);
  };
  
  return (
    <Pressable
      onPress={handlePress}
      style={{
        alignItems: "center",
        padding: 10,
        backgroundColor: date === selectedDate ? "#94dbf7ff" :  nowDate === date ? "#d4f1fcff": "#ffffff",
        borderRadius: 10,
      }}
    >
      <Text style={{ fontSize: 16, color: "gray" }}>{day}</Text>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{keyDay}</Text>
    </Pressable>
  );
};
export const DatePicker = () => {
  const dates = getWeeks();
  return (
    <FlatList
      scrollEnabled={false}
      horizontal
      style={{ padding: 12, borderRadius: 10, backgroundColor: "#ffffff"}}
      contentContainerStyle={{ justifyContent: "space-between", width: "100%" }}
      data={dates}
      renderItem={({ item }) => (
        <DateItem date={item.date} keyDay={item.keyDay} day={item.day} dayStr={item.dayStr} />
      )}
      keyExtractor={(item) => item.keyDay}
    />
  );
};
