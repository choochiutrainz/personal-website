import Link from 'next/link'
import projectStyles from '../styles/Project.module.css'

const ProjectItem = ({project}) => {
    return (
        <Link href="portfolio/[id]" as={`/portfolio/${project.id}`}>
            <a className={projectStyles.card}>
                <h3>{project.title} &rarr;</h3>
                <p>{project.body}</p>
            </a>
        </Link>
    )
}

export default ProjectItem