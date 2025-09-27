import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/state";
import { getWeek } from "../../store/reducers/dateSlice";
export const DateTitle = () => {
  return (
    <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
      Selected Date
    </Text>
  );
};

const DateItem = ({ date }: { date: string }) => {
    const dates = new Date().getDay()
    console.log(dates);
    
    return (
        <View style={{padding:10}}>
            <Text>{date}</Text>
        </View>
    );
}
export const DatePicker = () => {
  const dates = useAppSelector((state) => state.date);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getWeek());
  }, []);
  return (
    <FlatList
      data={Object.keys(dates.week)}
      renderItem={({ item }) => <DateItem date={item} />}
      keyExtractor={(item) => item}
    />
  );
};
