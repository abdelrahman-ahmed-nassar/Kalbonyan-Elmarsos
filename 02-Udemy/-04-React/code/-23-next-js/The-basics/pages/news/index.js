import Link from 'next/link';
import { Fragment } from 'react';

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href='/news/nextJs-is-a-great-framework'>
            NextJS 
          </Link>
        </li>
        <li>bla bla bla</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
