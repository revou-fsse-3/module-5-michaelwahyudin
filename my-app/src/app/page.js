// pages/index.js
import Link from 'next/link';

const HomePage = () => (
  <div>
    <h1>Welcome to the Home Page</h1>
    <nav>
      <ul>
        <li>
          <Link href="/serverPage" passHref>
            Server-side Page
          </Link>
        </li>
        <li>
          <Link href="/clientPage" passHref>
            Client-side Page
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default HomePage;
