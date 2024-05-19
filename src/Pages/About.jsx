"use client";

import React from "react";
import { Menu, X, MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const menuItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

const locations = [
  {
    title: "Jammu office",
    timings: "Mon-Sat 9am to 5pm.",
    address: "134, Kailash Nagar, Talab Tillo, Jammu",
  },
  {
    title: "Katra office",
    timings: "Mon-Sat 9am to 5pm.",
    address: "12th Main Rd, Indiranagar, Katra",
  },
  {
    title: "Janipur office",
    timings: "Mon-Sat 9am to 5pm.",
    address: "42, Residency Rd, Janipur, Jammu",
  },
];

const users = [
  {
    name: "Gabrielle Fernandez",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    position: "Marketing Lead",
  },
  {
    name: "Victória Silva",
    image:
      "https://images.generated.photos/vBRCiI_3UM4l40sU8s7fCwbJwzDwRTGpebzPkfHFsY4/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODgyMTAyLmpwZw.jpg",
    position: "Back-end developer",
  },
  {
    name: "Gabrielle Fernandez",
    image:
      "https://images.unsplash.com/photo-1549351512-c5e12b11e283?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",
    position: "Sales",
  },
  {
    name: "Sadie Lewis",
    image:
      "https://images.unsplash.com/photo-1485960994840-902a67e187c8?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",
    position: "Sales",
  },
  // {
  //   name: "Thilde Olaisen",
  //   image:
  //     "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=600&w=600",
  //   position: "Marketing Lead",
  // },
  // {
  //   name: "Deepika Ramesh",
  //   image:
  //     "https://images.generated.photos/lEhPUYYfYr9IOt13WZZGf2zbXZnCYdU1wUp7gcu_99c/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njg5NTQ5LmpwZw.jpg",
  //   position: "Front-end developer",
  // },
  // {
  //   name: "Jordi Santiago",
  //   image:
  //     "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   position: "Front-end developer",
  // },
  // {
  //   name: "Kerim Fahri",
  //   image:
  //     "https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",
  //   position: "Back-end developer",
  // },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="bg-gray-100">
      <div>
        <div className="mx-auto max-w-7xl px-4">
          {/* Hero Map */}
          <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-18">
            {/* <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
              <p className="text-xs font-semibold leading-normal md:text-sm">
                About the company
              </p>
            </div> */}
            <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
              Made with love, right here in India
            </p>
            <p className="max-w-4xl text-base text-gray-600 md:text-xl">
              Developed in India with a touch of passion, our Long Polling IDE
              embodies the spirit of innovation and collaboration.Join us on a
              journey of coding brilliance, crafted in India with pride and
              passion."
            </p>
          </div>
          <div className="w-full space-y-4">
            <img
              className="h-[200px] w-full rounded-xl object-cover md:h-full"
              src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
              alt=""
            />
          </div>
          {/* locations */}
          <div className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around">
            {locations.map((location) => (
              <div
                key={location.title}
                className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5"
              >
                <MapPin className="h-5 w-5" />
                <p className="w-full text-xl font-semibold  text-gray-900">
                  {location.title}
                </p>
                <p className="w-full text-base text-gray-700">
                  {location.timings}
                </p>
                <p className="text-sm font-medium">{location.address}</p>
              </div>
            ))}
          </div>
          <hr className="mt-20" />
          {/* greetings */}
          <div className="mt-16 flex items-center">
            <div className="space-y-6 md:w-3/4">
              {/* <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
                <p className="text-xs font-semibold leading-normal md:text-sm">
                  Join Us &rarr;
                </p>
              </div> */}
              <p className="text-3xl font-bold text-gray-900 md:text-4xl">
                Meet our team
              </p>
              <p className="max-w-4xl text-base text-gray-700 md:text-xl">
                Our philosophy is simple — hire a team of diverse, passionate
                people and foster a culture that empowers you to do your best
                work.
              </p>
              <div></div>
            </div>
          </div>
          {/* TEAM */}
          <div
            className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4"
            data-aos="flip-up"
          >
            {users.map((user) => (
              <div className="rounded-md border" key={user.name}>
                <img
                  src={user.image}
                  alt={user.name}
                  className="h-[300px] w-full rounded-lg object-cover "
                />
                <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
                  {user.name}
                </p>
                <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
                  {user.position}
                </p>
              </div>
            ))}
          </div>
          {/* Hiring Banner */}
          <div
            className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row"
            data-aos="fade-up"
          >
            <div className="space-y-6">
              <p className="text-sm font-semibold md:text-base">
                Join our team &rarr;
              </p>
              <p className="text-3xl font-bold md:text-4xl text-gray-900">
                We&apos;re just getting started
              </p>
              <p className="text-base text-gray-600 md:text-lg">
                Our philosophy is simple — hire a team of diverse, passionate
                people and foster a culture that empowers you to do your best
                work.
              </p>
              <button
                type="button"
                className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#d9480f] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Join Now
              </button>
            </div>
            <div className="md:mt-o mt-10 w-full">
              <img
                src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt="Getting Started"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <hr className="mt-6" />
        {/* footer */}
        <div className="mx-auto max-w-7xl"></div>
      </div>
    </div>
  );
};

export default About;
