import { FC } from 'react'

type AboutLayoutProps = {
    children: React.ReactNode,
}

const AboutLayout: FC<AboutLayoutProps> = ({ children }) => {
    return (
        <div>
            About Layout
            {children}
        </div>
    )
}

export default AboutLayout