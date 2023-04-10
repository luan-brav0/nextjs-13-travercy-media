import { log } from 'console'
import Link from 'next/link'
import { FC } from 'react'
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa"

type ReposPageProps = {}
async function fetchRepos() {
    const res: Response = await fetch('https://api.github.com/users/luan-brav0/repos')
    const repos = await res.json()
    return repos;
}

const ReposPage: FC<ReposPageProps> = (props) => {
    const repos  = await fetchRepos()
    console.log(repos)

    return (
        <div id="repositories">
            <h2>Repositories</h2>
            {repos.map((repo: typeof repos[0]) => {
                return(<li>
                    <Link href={repo.id}></Link>
                </li>

                )
            })
        }
            
        </div>
    )
}

export default ReposPage