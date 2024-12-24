import React from 'react'
import Card from './Card'

const Team = () => {
  return (
    <div className='bg-[#f5f5dc] pb-16 flex flex-col justify-center items-center p-6'>
        <h1 className='text-3xl uppercase mb-6'>Meet our <span className='font-bold'>best team</span></h1>
        <p className='w-[80%] text-center pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maxime praesentium nisi deserunt soluta quae quaerat officia optio voluptatem vero dolorem officiis tenetur illum aspernatur, exercitationem earum quia. Temporibus, quae?</p>

        <div className='border-black border-2 w-[10%] mb-12'></div>

        <div className='grid grid-cols-4 grid-rows-2 gap-4'>
            <Card
                image="/Profile 1.png"
                name="Alice Johnson"
                post="Software Engineer"
                text="Alice is a skilled developer with a passion for creating elegant solutions to complex problems."
            />
            <Card
                image="/Profile 4.png"
                name="Alice Johnson"
                post="Software Engineer"
                text="Alice is a skilled developer with a passion for creating elegant solutions to complex problems."
            />
            <Card
                image="/Profile 3.png"
                name="Alice Johnson"
                post="Software Engineer"
                text="Alice is a skilled developer with a passion for creating elegant solutions to complex problems."
            />
            <Card
                image="/Profile 2.png"
                name="Alice Johnson"
                post="Software Engineer"
                text="Alice is a skilled developer with a passion for creating elegant solutions to complex problems."
            />
            <Card
                image="/Profile 1.png"
                name="Alice Johnson"
                post="Software Engineer"
                text="Alice is a skilled developer with a passion for creating elegant solutions to complex problems."
            />
            <Card
                image="/Profile 4.png"
                name="Alice Johnson"
                post="Software Engineer"
                text="Alice is a skilled developer with a passion for creating elegant solutions to complex problems."
            />
            <Card
                image="/Profile 3.png"
                name="Alice Johnson"
                post="Software Engineer"
                text="Alice is a skilled developer with a passion for creating elegant solutions to complex problems."
            />
            <Card
                image="/Profile 2.png"
                name="Alice Johnson"
                post="Software Engineer"
                text="Alice is a skilled developer with a passion for creating elegant solutions to complex problems."
            />
        </div>
    </div>
  )
}

export default Team