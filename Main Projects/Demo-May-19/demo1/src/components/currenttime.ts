import { DateTime } from "luxon";

export const datedetails = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dateis = new Date();
  const day = days[dateis.getDay()];
  const details =
    day +
    " " +
    DateTime.now().toLocaleString(DateTime.DATE_MED) +
    " " +
    dateis.getHours() +
    ":" +
    dateis.getMinutes() +
    ":" +
    dateis.getSeconds();

  return details;
};
