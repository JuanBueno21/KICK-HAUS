import './Marquee.css'

const brands = [
  'Nike', 'Adidas', 'Jordan', 'New Balance',
  'Kipling', 'Adidas', 'Originals', 'Stanley'
]

function Marquee() {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {[...brands, ...brands].map((brand, i) => (
          <span key={i} className="marquee-item">
            {brand} <span className="marquee-dot">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee