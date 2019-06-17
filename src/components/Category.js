import React from 'react'

function Category (props) {
  const text = decodeURIComponent(props.text)
  return <p className='quiz__category'>{text}</p>
}

export default Category
