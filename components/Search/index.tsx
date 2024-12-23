import { SearchNormal1 } from 'iconsax-react'
import React from 'react'

const Search = () => {
  return (
    <form className='flex gap-x-2 border px-4 py-[10px] rounded-full'>
      <input type="text" className='focus:outline-none' placeholder="Search" />
      <button type="submit">
        <SearchNormal1 size="16" color="#323232"/>
      </button>
    </form>
  )
}

export default Search