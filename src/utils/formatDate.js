import moment from "moment/moment";
import 'moment/locale/tr';

export const formatDate = (unix_time) => {
  const date = new Date(unix_time * 1000);
  return moment(date).calendar()
};
