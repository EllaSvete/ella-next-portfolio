import React from 'react';
import python from '../images/python.png';
import github from '../images/github.png';
import git from '../images/git.png';
import next from '../images/next-js.png';
import js from '../images/js.png';
// import netlify from '../images/netlify.png';
import react from '../images/react.png';
import docker from '../images/docker.png';
import django from '../images/django.png';

import userData from '../constants/data';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1>
          About Me.
        </h1>
      </div>
      <div>
        <div>
          <div>
            <div>
              <h1>
                Contact
              </h1>
              <p>
                For any inquiry shoot a{" "}
                <a href={`mailto:${userData.email}`}>
                  mail
                </a>{" "}
                I will get back to you soon!
              </p>
            </div>
            <div>
              <h1>
                Job Opportunities
              </h1>
              <p>
                I am currently looking for a job. If I seem like a good fit, check my {" "}
                <a href={userData.resumeUrl} target="__blank">
                  Resume
                </a>{" "}
                and I would love to work for you!
              </p>
            </div>
            {/* Social Links */}
            <h1>
              Social Links
            </h1>
            <div>
              <div>
                <a href={userData.socialLinks.linkedIn}>
                  <div>&rarr;</div>
                  <p>
                    <div></div>
                    Facebook
                  </p>
                </a>
              </div>
              <div>
                <a href={userData.socialLinks.github}>
                  <div>&rarr;</div>
                  <p>
                    <div></div>
                    Twitter
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Text Area */}
          <div>
            {userData.about.description?.map((desc, idx) => (
              <p key={idx}>
                {desc}
              </p>
            ))}
            <h1>
              Tech Stack
            </h1>
            <div>
              <Image
                src={js}
                width={100}
                height={20}
                alt="javascript"/>
              <Image
                src={python}
                width={100} 
                height={20} 
                alt="python"/>
              <Image
                src={django}
                width={100} 
                height={20} 
                alt="django"/>
              <Image
                src={docker}
                width={100} 
                height={20} 
                alt="docker"/>
              <Image
                src={react}
                width={100} 
                height={20} 
                alt="react"/>
              <Image
                src={next}
                width={100} 
                height={20} 
                alt="next"/>
              <Image
                src={git}
                width={100} 
                height={20} 
                alt="git"/>
              <Image
                src={github}
                width={100} 
                height={20} 
                alt="github"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}