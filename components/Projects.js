import React from 'react';
import Image from 'next/image';
import cooking from '../images/devscooking.png';
import recordbin from '../images/recordbin.png';

export default function projects() {
  return (
    <section>
      <div>
        <h1>
          Projects
        </h1>
      </div>
      {/* start grid */}
      <div>
      <div>
        {/* card */}
        <a href='https://smells-like-devs-cooking-frontend-rho.vercel.app/'>
          <div>
            <Image
              src={cooking}
              alt="image of cooker site"
              width="600"
              height="500"
              className="transform hover:scale-125 transition duration-2000 ease-out"/>
              <h1>
                Smells Like Devs Cooking
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                01
              </h1>
          </div>
        </a>
      </div>
    <div>
      {/* card */}
      <a href='https://reccrdbin.netlify.app/'>
        <div>
          <Image
            src={recordbin}
            alt="recordbin"
            width="600"
            height="500"
            className="transform hover:scale-125 transition duration-2000 ease-out"/>
        </div>
      </a>
    </div>
    </div>
    </section>
  )
}