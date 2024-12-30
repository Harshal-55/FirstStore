import React from 'react'
import Card from './Card'

const Team = () => {
  return (
    <div className="bg-[#f5f5dc] pb-16 flex flex-col justify-center items-center p-4 sm:p-6">
  {/* Section Title */}
  <h1 className="text-2xl sm:text-3xl uppercase mb-4 sm:mb-6 text-center">
    Meet our <span className="font-bold">best team</span>
  </h1>
  <p className="w-[90%] sm:w-[80%] text-center pb-4 sm:pb-6 text-sm sm:text-base">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maxime
    praesentium nisi deserunt soluta quae quaerat officia optio voluptatem vero
    dolorem officiis tenetur illum aspernatur, exercitationem earum quia.
    Temporibus, quae?
  </p>

  {/* Divider */}
  <div className="border-black border-2 w-[20%] sm:w-[10%] mb-8 sm:mb-12"></div>

  {/* Team Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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