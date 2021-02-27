module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'home': "url('/img/home.JPG')",
        'portfolio': "url('/img/portfolio.jpg')",
        'passions': "url('/img/passions.jpg')",
        'resume': "url('/img/resume.jpg')",
        'contact': "url('/img/contact.jpg')",
      }),
      backgroundColor: theme => ({
        ...theme('colors'),
        's31-blue': "#1C2736",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
