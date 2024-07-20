import React from 'react'

const Card = ({person}) => {
  return (
    <>
       <a className="group block overflow-hidden rounded-lg cursor-pointer">
        <img
          src={person.image}
          alt=""
          className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[400px]"
        />
        <div className="relative bg-white py-2">
          <h3 className="text-sm text-center text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {person.name}
          </h3>
        </div>
      </a>
      </>
  )
}

export default Card