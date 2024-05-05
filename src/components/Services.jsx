import React, { useEffect, useState } from "react";

const Services = () => {
  const [images, setImages] = useState([]);
  const [content, setContent] = useState({}); // Change to object

  useEffect(() => {
    // Fetch images from JSON file
    fetch("./data/imageContent.json")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));

    // Fetch Content from JSON file
    fetch("./data/imageData.json")
      .then((response) => response.json())
      .then((data) => setContent(data)) // Update to setContent(data[0])
      .catch((error) => console.error("Error fetching Content:", error));
  }, []);

  return (
    <>
      <h1
        className="text-gradient flex-1 font-poppins font-semibold ss:text-[45px] text-[36px] text-white ss:leading-[20.8px] leading-[75px] text-center sm:text-left flex items-center justify-center p-5 mt-8"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        Build Your Dream
      </h1>
      <h1
        className="flex-1 font-poppins font-semibold ss:text-[45px] text-[32px] text-white ss:leading-[70.8px] leading-[75px] text-center sm:text-left flex items-center justify-center p-5"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        Many Years of Undefeated Success
      </h1>

      <div className="mx-auto">
        <div className="-m-1 flex flex-wrap md:-m-2">
          {Object.keys(content).map(
            (
              key,
              index // Change to Object.keys(content)
            ) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 p-1 md:p-2 font-poppins"
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    alt="gallery"
                    className="block h-68 w-full object-cover object-center"
                    src={images[index]} // Change to images[`img${index + 1}`]
                  />
                  <div className="p-6">
                    <h1 className="text-xl font-semibold text-gray-800 mb-2 ss:text-[24px] text-[32px] text-center">
                      {content[key][0]} {/* Access content using key */}
                    </h1>
                    <p className="text-gray-700 text-base text-center">
                      {content[key][1]}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Services;
