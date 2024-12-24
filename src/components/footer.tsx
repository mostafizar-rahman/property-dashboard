import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-background py-5 text-center">
      <span className=""> Copyright © {new Date().getFullYear()} <a href="#" className="font-semibold underline">Property</a>. Designed with by <Link target="_blank" to="https://mostafizar.netlify.app/"> <span className="font-semibold text-primary underline">Mostafizar Rahman</span> </Link> All rights reserved </span>
    </div>
  )
}

export default Footer