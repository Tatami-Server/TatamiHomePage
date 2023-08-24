import React from 'react';
import moment from 'moment';

const formatDate = (dateString, format) => {
  const date = moment(dateString);
  return date.format(format || "YYYY年MM月DD日");
};

const FormatDate = ({date, format}) => {
  const formattedDate = formatDate(date, format);
  
  return <>{formattedDate}</>;
};

export default FormatDate;
