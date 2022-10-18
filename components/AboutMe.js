import React from 'react';

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
              <Image src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="Icon of Javascript" className="h-20 w-20 mx-4 my-4"/>
              <Image
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                className="h-20 w-20 mx-4 my-4" alt="icon of html"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}