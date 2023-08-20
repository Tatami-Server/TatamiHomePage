import React from 'react';
import moment from 'moment';

const formatDate = (dateString) => {
  const date = moment(dateString);
  return date.format("YYYY年MM月DD日");
};

const FormatDate = ({date}) => {
  const formattedDate = formatDate(date);
  
  return <>{formattedDate}</>;
};

export default FormatDate;
