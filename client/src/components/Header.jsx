import React from 'react'

const Header = () => {
  return (
    <>
    <div className='flex justify-between bg-orange-600 text-white p-4'>
      <div>Cravings</div>

      <div className='flex gap-4'>
        <div>Login</div>
        <div>Register</div>
      </div>
    </div>
    </>
  )
}

export default Header
