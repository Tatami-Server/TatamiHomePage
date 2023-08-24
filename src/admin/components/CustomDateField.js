
import FormatDate from '@util/FormatDate';
import moment from 'moment';
import { TextField, useRecordContext } from 'react-admin';

const CustomDateField = ({source, format, sortable}) => {
    const record = useRecordContext();
    source = source || 'updatedAt'
    const date = moment(record[source].toDate())

    format = format || 'YYYY/MM/DD H:m:s'

    return (
        <FormatDate date={date} format={format} />
    )
}

// const CustomDateField = () => <TextField />

export default CustomDateField