import style from './styles/skills.module.css';

const Skills = () => {
    return(
        <div className={style.skills}>
            <h2 className={style.skillsTitle}>Skills</h2>
            <ul className={style.skillsUl}>
                <li className={style.skillsLi}>HTML5, CSS3</li>
                <li className={style.skillsLi}>JavaScript Basics</li>
                <li className={style.skillsLi}>Git, GitHub</li>
                <li className={style.skillsLi}>TypeScript</li>
                <li className={style.skillsLi}>React Basics</li>
            </ul>
        </div>
    )
}
export default Skills;