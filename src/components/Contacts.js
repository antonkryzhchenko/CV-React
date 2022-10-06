import style from './styles/contacts.module.css';
import avatar from './images/avatar.png';
import phone from './images/smartphone.png';
import github from './images/github.png';
import linkedin from './images/linkedin-logo.png';
import email from './images/email.png';

const Contacts = () => {
    return(
        <div className={style.contacts}>
            <img
            className={style.contactsAvatar}
            src={avatar}
            alt='avatar'
            />
            <div className={style.contactsInformation}>
                <div>
                    <p className={style.contactsInformationTitle}>Personal information</p>
                </div>
                <div>
                    <ul>
                        <li className={style.contactsLi}><img src={phone} alt='phone' className={style.contactsImg} />Phone: + 375 (29) 369-89-63</li>
                        <li className={style.contactsLi}><img src={github} alt='github' className={style.contactsImg} /><a className={style.contactsLink} href='https://github.com/antonkryzhchenko'>GitHub</a></li>
                        <li className={style.contactsLi}><img src={linkedin} alt='linkedin' className={style.contactsImg} /><a className={style.contactsLink} href='https://www.linkedin.com/in/anton-kryzhchenko-76818524a/'>LinkedIn</a></li>
                        <li className={style.contactsLi}><img src={email} alt='email' className={style.contactsImg} /><a className={style.contactsLink} href='a.p.kryzhchenko@gmail.com'>E-mail</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Contacts;