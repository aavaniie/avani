import '../styles/Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="wrap">
      <span>© {year} Avani. Built line by line.</span>
      <span>Back to top ↑</span>
    </footer>
  )
}

export default Footer
