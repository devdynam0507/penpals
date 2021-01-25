import Link from 'next/link'
import styles from '../../styles/Navigation.module.css';

export default function Navigation() {
    return (
        <nav class={styles ['nav-bar']}>
            <div class={styles ['nav-bar-logo']}>
                <Link href="/">
                    <a>Untitled</a>
                </Link>
            </div>
        </nav>
    )
}