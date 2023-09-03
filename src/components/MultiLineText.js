import parse from 'html-react-parser';

const MultiLineText = (({text}) => {
    text = text.replaceAll("\n", '<br>')

    return <p>{parse(`${text}`)}</p>
})

export default MultiLineText