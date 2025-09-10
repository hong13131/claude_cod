export const themes = {
  minimal: {
    name: '미니멀',
    description: '깔끔하고 간결한 디자인',
    className: 'theme-minimal'
  },
  neonCyber: {
    name: '네온 사이버',
    description: '미래지향적 네온 사이버펑크 스타일',
    className: 'theme-neon-cyber'
  },
  nature: {
    name: '네이처',
    description: '자연 친화적 유기적 디자인',
    className: 'theme-nature'
  },
  luxury: {
    name: '럭셔리',
    description: '고급스럽고 우아한 프리미엄 스타일',
    className: 'theme-luxury'
  }
} as const;

export type ThemeKey = keyof typeof themes;

export const themeList = Object.entries(themes).map(([key, theme]) => ({
  key: key as ThemeKey,
  ...theme
}));