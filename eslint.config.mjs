import nextVitals from 'eslint-config-next/core-web-vitals'

const eslintConfig = [
  ...nextVitals,
  {
    rules: {
      // The cart intentionally restores persisted localStorage state after mount
      // to avoid server/client hydration mismatches.
      'react-hooks/set-state-in-effect': 'off',
    },
  },
]

export default eslintConfig
