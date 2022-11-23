import HeadingStyle from '../../style/components/Heading.module.css';

const Heading = (props) => {
  return (
    <div className={HeadingStyle["heading-container"]}>
        <div className={HeadingStyle["heading-line"]}></div>
        <h1 className={HeadingStyle["heading-text"]}>
          {props.heading}
        </h1>
        <div className={HeadingStyle["heading-line"]}></div>
    </div>
  );
}
export default Heading;