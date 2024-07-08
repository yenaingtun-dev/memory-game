import React from 'react'

const Header = () => {
  return (
      <div className="p-4 w-full">
        <a className="block relative h-60 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="https://dummyimage.com/421x261"
          />
        </a>
      </div>
  )
}

export default Header