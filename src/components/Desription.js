import style from './styles/description.module.css';

const Description = () => {
    return(
        <div className={style.description}>
            <p className={style.descriptionTitle}>Anton Kryzhchenko</p>
            <p className={style.descriptionSubtitle}>Front-End Developer (trainee)</p>
        </div>
    )
}
export default Description;