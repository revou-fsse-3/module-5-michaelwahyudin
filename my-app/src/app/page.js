// src/app/page.js
import Link from 'next/link';

const HomePage = () => (
  <div>
    <h1>Welcome to the Home Page</h1>
    <nav>
      <ul>
        <li>
          <Link href="/serverpage" passHref>
            10 Pokemon
          </Link>
        </li>
        <li>
          <Link href="/clientpage" passHref>
            151 Pokemon
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default HomePage;
