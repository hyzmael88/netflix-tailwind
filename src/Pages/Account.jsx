import React from 'react'
import SavedShows from '../components/SavedShows'

function Account() {
  return (
    <div>
      <div className='w-full text-white'>
      <img
        className=" w-full h-[400px] object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/28b69a57-cadf-43d9-8a95-e5f2e11199de/113a98d6-3db6-4e13-9895-278b7aedaf33/MX-es-20221010-popsignuptwoweeks-perspective_alpha_website_small.jpg"
      />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>

        </div>
      </div>
      </div>
      <SavedShows/>
    </div>
  )
}

export default Account