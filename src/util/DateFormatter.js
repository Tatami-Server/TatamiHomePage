import React from 'react';
import moment from 'moment';
import { Timestamp } from 'firebase/firestore';

  export const formatDate = (dateString, format) => {
    const date = moment(dateString);
    return date.format(format || "YYYY年MM月DD日");
  }
  
  export const FormatDate = ({date, format}) => {
    const formattedDate = formatDate(date, format);
    
    return <>{formattedDate}</>;
  }

  export const firestoreTimestampFormat = (data, format) => {
      Object.keys(data).map(key => {
        const timestamp = data[key]
        if(timestamp instanceof Timestamp) {
          let date = timestamp.toDate()
          if(format) {
            date = formatDate(date)
          }

          data[key] = date
        }

      })

      return data
  }
