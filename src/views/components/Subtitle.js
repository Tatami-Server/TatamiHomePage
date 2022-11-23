import SubtitleStyle from  '../../style/components/Subtitle.module.css';

const SubTitle = (props) => {
  return (
    <div className={SubtitleStyle["subtitle-container"]}>
      <h2 className={SubtitleStyle.subtilte}>
        <span>
        {props.subtitle}
        </span>
      </h2>
    </div>
  );
}
export default SubTitle;