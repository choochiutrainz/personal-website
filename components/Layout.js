import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'

export default function Layout({children}) {
    return (
        <>
        <Nav />
        <Header />
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        <Footer />
        </>
    )
}