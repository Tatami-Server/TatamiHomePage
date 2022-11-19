import '../../style/components/Heading.css';

const Heading = (props) => {
  return (
    <div className='heading_container'>
        <div className='heading_line'></div>
        <h1 className='heading_text'>
          {props.heading}
        </h1>
        <div className='heading_line'></div>
    </div>
  );
}
export default Heading;