import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

// eslint-disable-next-line react/display-name
export const Content = React.forwardRef<HTMLDivElement>((props, ref) => {
  const dummyContent = [
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: (
        <>
          <p>
            Sit duis est minim proident non nisi velit non consectetur. Esse
            adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
            Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat
            incididunt incididunt enim magna id est qui sunt fugiat. Laboris do
            duis pariatur fugiat Lorem aute sit ullamco. Qui deserunt non
            reprehenderit dolore nisi velit exercitation Lorem qui do enim
            culpa. Aliqua eiusmod in occaecat reprehenderit laborum nostrud
            fugiat voluptate do Lorem culpa officia sint labore. Tempor
            consectetur excepteur ut fugiat veniam commodo et labore dolore
            commodo pariatur.
          </p>
          <p>
            Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
            veniam in commodo id reprehenderit adipisicing. Proident duis
            exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
          </p>
          <p>
            Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
            reprehenderit deserunt amet laborum consequat adipisicing officia
            qui irure id sint adipisicing. Adipisicing fugiat aliqua nulla
            nostrud. Amet culpa officia aliquip deserunt veniam deserunt officia
            adipisicing aliquip proident officia sunt.
          </p>
          <p>
            Aute ut laborum sint consequat velit excepteur sunt ex aliquip est
            consectetur. In adipisicing ea in consectetur qui dolore dolor sint
            aliquip esse. Laboris excepteur velit reprehenderit do nulla ipsum
            magna in esse sit cillum excepteur anim anim. Ea dolore labore
            officia sit enim consequat nisi occaecat nisi tempor. Culpa minim
            cillum incididunt culpa nisi ipsum non laborum tempor ad. Est aute
            id ipsum aute et et.
          </p>

          <p>
            Sit cupidatat incididunt aute ad commodo culpa ad aliqua voluptate
            dolor. Minim ut anim nostrud voluptate do officia enim incididunt.
            Deserunt consequat veniam cillum ipsum commodo anim.
          </p>
          <p>
            Ut aliquip ipsum duis Lorem labore do non ullamco laborum amet
            fugiat in pariatur. Ut ut voluptate esse esse mollit ullamco dolor
            aliquip eiusmod nostrud ullamco enim duis. Laborum excepteur sint
            occaecat sint laboris ut laborum velit ut irure aliqua. Ad velit
            reprehenderit et cillum dolore duis duis quis. Eiusmod consectetur
            ad proident velit commodo cupidatat. Cupidatat quis id anim in
            nulla. Esse ullamco consequat nisi ipsum quis pariatur ipsum culpa
            labore id sint.
          </p>
          <p>
            Aliquip esse elit aliqua culpa aliquip labore culpa. Aute aliquip id
            ex consequat in irure laboris consectetur esse. Adipisicing elit
            occaecat cillum elit dolor eiusmod pariatur Lorem id sint tempor
            consectetur. Excepteur magna ipsum dolor deserunt aliqua aliquip
            irure. Elit ut consectetur officia ut cupidatat sit reprehenderit
            pariatur consequat. Voluptate elit est nostrud eu anim excepteur
            officia. Incididunt cupidatat tempor ut sunt occaecat amet labore
            consectetur mollit.
          </p>
        </>
      ),
      badge: "React",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: (
        <>
          <p>
            Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
            deserunt cupidatat aute. Enim cillum dolor et nulla sunt
            exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt
            consectetur sint qui qui do do qui do. Labore laborum culpa magna
            reprehenderit ea velit id esse adipisicing deserunt amet dolore.
            Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor
            aliquip duis veniam sunt.
          </p>
          <p>
            In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
            veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
            reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
            cillum ut mollit.
          </p>
          <p>
            Tempor velit ullamco sit proident ut. Consectetur commodo eiusmod
            sit culpa occaecat pariatur velit minim. Nulla minim et ea qui
            tempor dolore et pariatur nulla aute nulla. Exercitation anim ad
            incididunt aliquip duis velit labore sit proident consequat nisi
            voluptate ullamco.
          </p>
        </>
      ),
      badge: "Changelog",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: (
        <>
          <p>
            Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
            deserunt cupidatat aute. Enim cillum dolor et nulla sunt
            exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt
            consectetur sint qui qui do do qui do. Labore laborum culpa magna
            reprehenderit ea velit id esse adipisicing deserunt amet dolore.
            Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor
            aliquip duis veniam sunt.
          </p>
          <p>
            In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
            veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
            reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
            cillum ut mollit.
          </p>
          <p>
            Tempor velit ullamco sit proident ut. Consectetur commodo eiusmod
            sit culpa occaecat pariatur velit minim. Nulla minim et ea qui
            tempor dolore et pariatur nulla aute nulla. Exercitation anim ad
            incididunt aliquip duis velit labore sit proident consequat nisi
            voluptate ullamco.
          </p>
        </>
      ),
      badge: "Launch Week",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div ref={ref} className="absolute mx-auto max-w-2xl pt-4 antialiased">
      {dummyContent.map((item, index) => (
        <div key={`content-${index}`} className="mb-10">
          <h2 className="mb-4 w-fit rounded-full bg-black px-4 py-1 text-sm text-white">
            {item.badge}
          </h2>

          <p className={twMerge("text-xl mb-4")}>
            {item.title}
          </p>

          <div className="prose prose-sm text-sm text-neutral-700">
            {item?.image && (
              <Image
                src={item.image}
                alt="blog thumbnail"
                height="1000"
                width="1000"
                className="mb-10 rounded-lg object-cover"
              />
            )}
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
});

