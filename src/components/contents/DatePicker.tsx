import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/state";
import { getWeek } from "../../store/reducers/dateSlice";
export const DateTitle = () => {
    const getDay = new Date().getDate() ;
    const getMonth = new Date().toLocaleString('default', { month: 'short' });
  return (
    <View style={{flexDirection:"row",alignItems:"flex-end",gap:5}}>
        <Text style={{fontSize:36,fontWeight:"bold"}}>
            Today
        </Text>
        <Text style={{fontSize:36,color:"gray",fontWeight:"bold"}}>
            , {getMonth + getDay}
        </Text>
    </View>
  );
};

const DateItem = ({ keyDay }: { keyDay: string }) => {
  const dates = new Date().getDate() + parseInt(keyDay) - new Date().getDay();
  const day = useAppSelector(
    (state) => state.date.week[keyDay as keyof typeof state.date.week]
  );
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 16 }}>{day}</Text>
      <Text>{dates}</Text>
    </View>
  );
};
export const DatePicker = () => {
  const dates = useAppSelector((state) => state.date);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getWeek());
  }, []);
  return (
    <FlatList
      horizontal
      style={{ width: "100%"}}
      contentContainerStyle={{justifyContent:"space-between" }}
      data={Object.keys(dates.week)}
      renderItem={({ item }) => <DateItem keyDay={item} />}
      keyExtractor={(item) => item}
    />
  );
};
