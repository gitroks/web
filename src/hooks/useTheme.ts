import { useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

const THEME_KEY = 'theme'

const getSystemTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'dark'
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark'
}

const getStoredTheme = (): Theme | null => {
  if (typeof window === 'undefined') {
    return null
  }
  const stored = window.localStorage.getItem(THEME_KEY)
  return stored === 'light' || stored === 'dark' ? stored : null
}

export const useTheme = (): {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
} => {
  const [theme, setThemeState] = useState<Theme>(() => getStoredTheme() ?? getSystemTheme())

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
    const handleChange = (event: MediaQueryListEvent): void => {
      const stored = getStoredTheme()
      if (stored) {
        return
      }
      setThemeState(event.matches ? 'light' : 'dark')
    }

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange)
    } else {
      mediaQuery.addListener(handleChange)
    }

    return (): void => {
      if (typeof mediaQuery.removeEventListener === 'function') {
        mediaQuery.removeEventListener('change', handleChange)
      } else {
        mediaQuery.removeListener(handleChange)
      }
    }
  }, [])

  const setTheme = (nextTheme: Theme): void => {
    setThemeState(nextTheme)
  }

  const toggleTheme = (): void => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { theme, setTheme, toggleTheme }
}
