import React from 'react';
import Link from "next/link";
import '../../styles/main.scss'
class Header extends React.Component{
    render(){
       
return <div>
<p className="s">I am styled p element</p>
<Link href="/">


      <a>Home</a>
      </Link>
      <Link href="/about">
      <a>About</a>
      </Link>
      <Link href="/portfolio">
      <a>Portfolio</a>
      </Link>
      <Link href="/blogs">
      <a>Blogs</a>
      </Link>
      <Link href="/cv">
      <a>Cv</a>
      </Link>
      <style jsx>{`
      a{
          font-size:20px;
          text-decoration:none;
      }
      `}</style>
</div>

    }
}

export default Header