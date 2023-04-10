import { FC } from 'react'
import Link from 'next/link'

type HeaderProps = {}

type NavItemProps = {
    title: string,
    route: string
}
const NavItem: FC<NavItemProps> = (navItemProps: NavItemProps) => {
    return (<li className=' w-[5rem] px-4 py-2 mx-[0.3rem] bg-slate-600 text-center rounded-full'>
        <Link href={navItemProps.route}>{navItemProps.title}</Link>
    </li>)
}
const Header: FC<HeaderProps> = (props) => {

    return (
        <header id='header' className='bg-slate-800 border-slate-900 p-1 md:p-3 md:px-32 border-b rounded-b-xl w-[90vw] mx-auto flex-col md:flex-row justify-center align-center items-center  md:flex md:justify-between md:align-middle'>
            <div id="logo-container">
                <Link id='logo' href={'/'} >Travercy Media</Link>
            </div>
            <div className="first" id="menu">
                <ul className='flex justify-center p-1'>
                    <NavItem title='Home' route="/" />
                    <NavItem title='About' route="/about" />
                    <NavItem title='Team' route="/about/team" />
                </ul>
            </div>
        </header>
    )
}

export default Header