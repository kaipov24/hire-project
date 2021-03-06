import React from 'react'

import './extra.css'

const Hero = () => {
  return (
    <div className="background__hero">
      <div className=" imgClass">
        <div className="relative sm:pt-24 pt-20 text-white container px-3 flex mx-auto flex-wrap flex-col md:flex-row items-center">
          <div className="flex pt-8 flex-col w-3/4 md:w-3/5 justify-start items-start text-left">
            Вы можете предложить работу человеку с инвалидностью?
            <h1 className="my-4 sm:text-5xl text-4xl font-bold leading-tight">Уникальные кандидаты здесь</h1>
            <p className="leading-normal text-2xl mb-8">
              Предоставив хорошие условия, вам гарантирован резуьтат и честность!
            </p>

          </div>

          <div className="w-full md:w-3/5 py-6 text-center">
            <img className="w-full md:w-4/5 z-50" src="hero.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {}

export default React.memo(Hero)
