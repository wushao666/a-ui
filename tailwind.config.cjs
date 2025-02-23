/** @type {import('tailwindcss').Config} */
module.exports = {
  // 应用范围
  content: ['./index.html', './src/**/*.(vue|js|ts|jsx|tsx)'],
  theme: {
    extend: {
      fontSize: {
        // 第一个值表示字体大小，第二个值表示行高
        xs: ['0.25rem', '0.35rem'],
        sm: ['0.35rem', '0.45rem'],
        base: ['0.45rem', '0.55rem'],
        lg: ['0.55rem', '0.65rem'],
        xl: ['0.65rem', '0.75rem'],
      },
      boxShadow: {
        'l-white': '-10px 0 10px white'
      }
    },
  },
  plugins: [],
}
