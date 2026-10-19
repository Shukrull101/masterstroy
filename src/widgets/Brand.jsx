import logo from "../shared/assets/images/logo.png"

export default function Brand({ light = false }) {
  return (
    <a className={`brand ${light ? 'brand-light' : ''}`} href="#home" aria-label="Мастер Строй — на главную">
      <img 
        src={logo} 
        alt="Мастер Строй" 
        style={{ height: '38px', width: 'auto', objectFit: 'contain' }} 
      />
    </a>
  )
}