import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
    return (
        <>
            <div className='w-full text-white'>
                <img className='w-full h-[400px] object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/905a6124-799c-44f5-bf9a-68a82a7ddf4a/KE-en-20230213-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='/' />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
                <div className='absolute top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
                </div>
            </div>
            <SavedShows />
        </>
    )
}

export default Account