import React from 'react'

function ContackCard(props) {
  const [src, name, phone, email] = props
  return (
    <div className="contack-card">
      <img src={src} alt="a" />
      <p>{name}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  )
}
export default ContackCard
