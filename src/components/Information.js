import style from './styles/information.module.css';
import Description from './Desription.js';
import Education from './Education.js';
import Skills from './Skills.js';
import Hobbies from './Hobbies.js';
import JobExperience from './JobExperience.js';

const Information = () => {
    return(
        <div className={style.information}>
            <Description />
            <Education />
            <Skills />
            <Hobbies />
            <JobExperience />
        </div>
    )
}
export default Information;