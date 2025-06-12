import './CenterBox.css'

function CenterBox({ title, children }) {
  return (
    <div className="center-screen">
      <div className="center-box">
        {title && <h1 className="center-title">{title}</h1>}
        {children}
      </div>
    </div>
  )
}

export default CenterBox
