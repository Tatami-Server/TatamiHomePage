const groupBy = function(xs, key, sort) {
    if(sort) {
        xs = orderBy(xs, sort)
    }
    // xs.sort((a, b))

    const grouped =  xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);

        return rv;
    }, {});

    return Object.entries(grouped)
};

const  orderBy = (obj, sort) => {
    const [ field, order ] = sort
    obj.sort((a, b) => {
        const aData = field.split('.').reduce((o, p) => {
            return o[p] && o[p] ? o[p] : null
        }, a)

        const bData = field.split('.').reduce((o, p) => {
            return o[p] && o[p] ? o[p] : null
        }, b)

        if(order === 'asc') {
            return aData - bData
        }
        if(order === 'desc') {
            return bData - aData
        }
    })

    return obj
}

export default groupBy