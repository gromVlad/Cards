import { useState } from 'react'

import styles from './dropdownMenu.module.scss'
import edit from './edit-2-outline.svg'
import sign from './log-out.svg'
import person from './person-outline.svg'
import learn from './play-circle-outline.svg'
import deleteImg from './trash-outline.svg'

// Avatar.tsx

export type AvatarProps = {
  username?: string
  email?: string
  src?: string
  onProfileClick?: () => void
  onSignOutClick?: () => void
  onLearnClick?: () => void
  onEditClick?: () => void
  onDeleteClick?: () => void
}

export const Avatar = ({
  username,
  email,
  src,
  onProfileClick,
  onSignOutClick,
  onLearnClick,
  onEditClick,
  onDeleteClick,
}: AvatarProps) => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(prev => !prev)
  }

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={src} alt="Avatar" onClick={toggleMenu} />

      {showMenu && (
        <div className={styles.dropdownMenu}>
          <span className={styles.menuItem} onClick={onProfileClick}>
            <img src={person} alt="profile" /> Profile
          </span>

          <div className={styles.menuItem} onClick={onSignOutClick}>
            <img src={sign} alt="profile" /> Sign Out
          </div>

          <hr className={styles.separator} />

          <div className={styles.menuItem} onClick={onLearnClick}>
            <img src={learn} alt="profile" /> Learn
          </div>

          <div className={styles.menuItem} onClick={onEditClick}>
            <img src={edit} alt="profile" /> Edit
          </div>

          <div className={styles.menuItem} onClick={onDeleteClick}>
            <img src={deleteImg} alt="profile" /> Delete
          </div>
        </div>
      )}

      <div className={styles.tooltip}>
        <div>{username}</div>
        <div>{email}</div>
      </div>
    </div>
  )
}
