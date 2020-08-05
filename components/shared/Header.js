import React from 'react';
import Link from 'next/link';

class Header extends React.Component {

    render() {
        return (
            <div>
                <p className="customClassFromFile">This is a para</p>
                <Link href="/">
                    <a style={{'fontSize': '20px'}}>Home</a>
                </Link>
                <Link href="/about">
                    <a> About </a>
                </Link>
                <Link href="/portfolios">
                    <a> Portfolios </a>
                </Link>
                <Link href="/cv">
                    <a> CV </a>
                </Link>
                <Link href="/blogs">
                    <a> Blogs </a>
                </Link>
            </div>
            
        )
    }
}

export default Header;