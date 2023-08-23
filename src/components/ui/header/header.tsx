import { ReactNode } from 'react'

import styles from './header.module.scss'

interface HeaderProps {
  src?: string
  rightContent?: ReactNode
  children?: ReactNode
}

export const Header: React.FC<HeaderProps> = ({ src, rightContent, children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={src} alt="logo" />
        </div>

        <div className={styles.right}>{rightContent}</div>
      </header>
      <main>{children}</main>
    </div>
  )
}
