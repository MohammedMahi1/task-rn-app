import dayjs from "dayjs";

const startOfWeek = dayjs().startOf("week").add(0, "day");
export const getWeeks = () => {
  let week: { date:any;keyDay: string; day: string,dayStr:string }[] = [];
 return Array.from({ length: 7 }).map(
    (_, i) =>
      (week[i] = {
        keyDay: startOfWeek.add(i, "day").format("DD"),
        day: startOfWeek.add(i, "day").format("ddd"),
        date: startOfWeek.add(i, "day").format("DD-MM-YYYY"),
        dayStr : startOfWeek.add(i, "day").format("dddd"),
      })
  );
};
