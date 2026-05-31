export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "tertiary-fixed": "#dfe3e7", "surface-variant": "#cee5ff",
        "on-surface-variant": "#43474d", "primary-fixed-dim": "#b0c9e8",
        "on-tertiary-fixed-variant": "#43474b", "inverse-on-surface": "#e8f2ff",
        "secondary-fixed": "#8df2ff", "inverse-primary": "#b0c9e8",
        "on-primary": "#ffffff", "surface-tint": "#49607c",
        "surface-container": "#e3efff", "tertiary-fixed-dim": "#c3c7cb",
        "on-error": "#ffffff", "surface-container-lowest": "#ffffff",
        "primary-container": "#102a43", "primary-fixed": "#d1e4ff",
        "on-tertiary-fixed": "#171c1f", "surface-dim": "#c1ddfb",
        "primary": "#00152a", "secondary-container": "#76eefd",
        "on-primary-fixed-variant": "#314863", "secondary": "#006972",
        "on-tertiary": "#ffffff", "outline-variant": "#c3c6ce",
        "on-primary-fixed": "#011d35", "on-primary-container": "#7a92b0",
        "on-secondary-container": "#006b75", "surface-container-high": "#d8eaff",
        "inverse-surface": "#16334a", "surface": "#f7f9ff",
        "surface-bright": "#f7f9ff", "outline": "#74777e",
        "error-container": "#ffdad6", "on-tertiary-container": "#8b9094",
        "surface-container-highest": "#cee5ff", "on-surface": "#001d32",
        "tertiary-container": "#24292c", "on-secondary-fixed-variant": "#004f56",
        "on-error-container": "#93000a", "on-secondary-fixed": "#001f23",
        "surface-container-low": "#edf4ff", "secondary-fixed-dim": "#5dd7e6",
        "tertiary": "#101517", "error": "#ba1a1a",
        "background": "#f7f9ff", "on-background": "#001d32",
        "on-secondary": "#ffffff"
      },
      borderRadius: {
        DEFAULT: '0.25rem', lg: '0.5rem', xl: '0.75rem', full: '9999px'
      },
      spacing: {
        xl: '80px', sm: '12px', lg: '48px', gutter: '24px',
        'margin-mobile': '16px', md: '24px', 'margin-desktop': '64px',
        base: '8px', xs: '4px'
      },
      fontFamily: {
        'headline-lg-mobile': ['Montserrat'], 'label-md': ['Inter'],
        'caption': ['Inter'], 'display-lg': ['Montserrat'],
        'body-md': ['Inter'], 'body-lg': ['Inter'],
        'headline-md': ['Montserrat'], 'headline-lg': ['Montserrat']
      },
      fontSize: {
        'headline-lg-mobile': ['28px', { lineHeight: '36px', fontWeight: '600' }],
        'label-md': ['14px', { lineHeight: '20px', fontWeight: '600' }],
        'caption': ['12px', { lineHeight: '16px', fontWeight: '400' }],
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'headline-lg': ['32px', { lineHeight: '40px', fontWeight: '600' }]
      }
    }
  },
  plugins: []
}
