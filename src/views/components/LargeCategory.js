import LargeCategoryStyle from '../../style/components/LargeCategory.module.css';

const LargeCategory = (props) =>{
  return(
    <div className={LargeCategoryStyle["large-category-container"]}>
        <div className={LargeCategoryStyle["large-catergory-line"]}></div>
        <h3 className={LargeCategoryStyle["large-catergroy"]}>
          {props.LargeCategory}
        </h3>
        <div className={LargeCategoryStyle["large-catergory-line"]}></div>
    </div>
  );
}
export default LargeCategory;