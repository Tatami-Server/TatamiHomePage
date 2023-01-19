import { Link } from "react-router-dom";


const FlexLink = ({children, href}) =>{
  if(href.indexOf("http") === 0 ){
    return <a target="_blank" rel="noreferrer"  href ={href}>{children}</a>
  }else{
    return <Link to ={href}>{children}</Link>
  }
}
export default FlexLink;