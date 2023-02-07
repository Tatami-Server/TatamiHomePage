import { Link } from "react-router-dom";


const FlexLink = ({children, href, color}) =>{
  if(href.indexOf("http") === 0 ){
    return <a target="_blank" rel="noreferrer"  href ={href} style ={{color:{color}}}>{children}</a>
  }else{
    return <Link to ={href} style ={{color:{color}}}>{children}</Link>
  }
}
export default FlexLink;