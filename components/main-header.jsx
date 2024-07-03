import logoImage from '@/assets/logo.png'
import Link from 'next/link'
import classes from './main-header.module.css'
import Image from 'next/image'

export default function MainHeader(){
    return(
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image src={logoImage} priority={true} alt="A plate with food on it." />
                NextLevel Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Foodie Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}