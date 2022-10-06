import style from './styles/container.module.css';
import Contacts from './Contacts.js';
import Information from './Information.js'

const Container = () => {
    return(
        <div className={style.container}>
            <Contacts />
            <Information />
        </div>
    )
}
export default Container;