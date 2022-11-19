import '../../style/components/Subtitle.css';

const SubTitle = (props) => {
  return (
    <div className='subtitle_container'>
      <h2 className='subtilte'>
        <span>
        {props.subtitle}
        </span>
      </h2>
    </div>
  );
}
export default SubTitle;