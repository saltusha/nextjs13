import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <div>Welcome to Traversy Media</div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
