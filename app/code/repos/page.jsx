import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye  } from 'react-icons/fa'

const getRepos = async () => {
  const response = await fetch('https://api.github.com/users/bradtraversy/repos', {
    next:{
      revalidate: 60 // to wait until it fetches fresh data
    }
  })

  await new Promise((resolve) => setTimeout(resolve,1000))
  const repos =  await response.json()
  return repos 

}

const ReposPage = async () => {
  const repos = await getRepos()
  console.log(repos)
  return (
    <div className='repos-container'>
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repos.map((repo) => (<li key={repo.id}>
          <Link href={`/code/repos/${repo.name}`}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <div className="repo-details">
              <span><FaStar /> {repo.stargazers_count} </span>
              <span><FaCodeBranch /> {repo.forks_count} </span>
              <span><FaEye /> {repo.watchers_count} </span>
            </div>
          </Link>
        </li>))}
      </ul>
    </div> 
  )
}

export default ReposPage