import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import axios from 'axios';
// import Link from 'next/link';

import { Link } from '../routes';

class Portfolios extends React.Component {

    static async getInitialProps() {
        let posts = [];
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            posts = res.data;
        } catch(e) {
            console.error(e);
        }

        return { posts: posts.slice(0, 10) };
    }

    renderPosts(posts) {
        return posts.map(post =>
             <li key={ post.id }>
                 <Link route={`/portfolios/${post.id}`}>
                    <a>
                    { post.title }
                    </a>
                 </Link>
             </li>
            )
    }

    render() {

        const { posts } = this.props;
        return(
            <BaseLayout>
                <BasePage>
                    <h1>I am on portfolios Page</h1>
                    <ul>
                        {this.renderPosts(posts)}
                    </ul>
                </BasePage>
            </BaseLayout>
        )
        
    }
}
export default Portfolios;