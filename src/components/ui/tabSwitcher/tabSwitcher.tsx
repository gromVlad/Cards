import { Typography } from '../typography'

import styles from './tabSwitcher.module.scss'

interface TabSwitcherProps {
  options: string[]
  value: string
  onChange: (value: string) => void
  isDisable?: boolean
}

export const TabSwitcher: React.FC<TabSwitcherProps> = ({
  options,
  value,
  onChange,
  isDisable = false,
}) => {
  const getTabClassName = (option: string) => {
    let cls = styles.tab

    if (option === value) {
      cls += ` ${styles.tabActive}`
    }

    return cls
  }

  return (
    <div className={styles.tabSwitcher}>
      {options.map(option => (
        <button
          disabled={isDisable}
          key={option}
          className={getTabClassName(option)}
          onClick={() => onChange(option)}
        >
          <Typography variant="body1" className={isDisable ? styles.disTextTab : ''}>
            {option}
          </Typography>
        </button>
      ))}
    </div>
  )
}
