import Link from 'next/link';

const Link = ({children, href, color}) => {
  if(href.indexOf("http") === 0 ){
    return <a target="_blank" rel="noreferrer" href={href} style={{color}}>{children}</a>
  } else {
    return <Link href={href} style={{color}}>{children}</Link>
  }
}

export default Link;
