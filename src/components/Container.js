import React from "react";
import Link from 'next/link'
import Date from "./Date";


function Container({allPostsData}) {
  return (
    <div className="container max-w-prose mx-auto pt-20 mb-20">
      {/* list top 10 blogs */}
      {/* Link to posts pages */}
      <section className="">
        <ul className="">
          {allPostsData.map(({ id, date, title }) => (
            <div className="block">
              <li className="cursor-pointer hover:text-teal-a200 hover:underline" key={id}>
                <div className="text-4xl tracking-wide leading-relaxed font-semibold">
                  <Link href={`/posts/${id}`}>
                    {title}
                  </Link>
                </div>
                <div className="text-sm font-mono font-light text-left">
                  <Date dateString={date} />
                </div>
              </li>
            </div>
              
          ))}
        </ul>
      </section>

    </div>
  );
}

export default Container;


