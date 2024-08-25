import React from "react";

const CourseDetailSection = ({ title, courses, extraInfo }) => {
  return (
    <div className=" text-white flex flex-col items-center lg:px-48">
      <div className="w-full lg:mb-20 flex flex-col items-center lg:items-start">
        <h2 className="text-2xl lg:text-[42px] custom-font mb-6 lg:mb-10 mx-6 text-center lg:mx-0">
          {title}
        </h2>
        <div className="lg:space-y-16 w-full">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center justify-center h-full overflow-hidden lg:h-[60vh] relative"
            >
              <div className="absolute inset-0 bg-cover bg-dark-blue opacity-10 lg:-z-30 w-full"></div>
              <div className="absolute lg:static -z-40 lg:z-10 w-full lg:w-1/3 opacity-10 lg:opacity-80 ">
                <img
                  src={course.images.src}
                  alt={course.images.alt}
                  className="w-full h-auto object-cover opacity-80"
                />
              </div>
              <div className="w-full md:w-2/3 p-8">
                <h3 className="custom-font text-xl lg:text-2xl font-normal mb-4">
                  {course.name}
                </h3>
                <ul className="space-y-4">
                  {course.course.map((detail, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center border-b border-white py-3"
                    >
                      <div className="space-y-1">
                        <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLScwByM0hSdqMO8FHacMwmbShwjQ-yLxlJgRqSubXHwvC3Aotg/viewform"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-sm lg:text-base hover:underline"
                        >
                          {detail.number}
                        </a>
                        <p className="text-neutral-400 text-sm lg:text-base">
                          {detail.details}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium text-sm lg:text-base">
                          {detail.price}
                        </p>
                        <p className="text-neutral-400 text-sm lg:text-base">
                          {detail.time}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                {extraInfo && (
                  <div className="text-lg font-extralight pt-12">
                    <p>{extraInfo}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailSection;
