// cssインポート
import Style from '@style/components/LargeCategory.module.css';

const LargeCategory = (props) =>{
  return(
    <div className={Style["large-category-container"]}>
        <div className={Style["large-catergory-line"]}></div>
        <h3 className={Style["large-catergroy"]}>
          {props.LargeCategory}
        </h3>
        <div className={Style["large-catergory-line"]}></div>
    </div>
  );
}
export default LargeCategory;