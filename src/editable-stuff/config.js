// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Katie",
  middleName: "",
  lastName: "Ridge",
  message: " Aspiring Interior Designer ",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/kaitlin-ridge/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../assets/img/aboutme.jpeg"),
  imageSize: 375,
  message:
    "Katie strives to design interiors that create a positive impact on her clients’ lives.  What started as a hobby, quickly became a passion for her. With an eye for quality, style, and a client-centered approach to design, Katie Ridge has proven herself as an innovative designer. In her spare time, Katie enjoys spending time with her family and dogs, exploring Denver’s food scene, and recently lifting.",
  resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Portfolio",
  message:
    "As a In-Home Design Specialist for The Container Store, Katie would hold In-Home consultations that included discussing the needs and style for the space, measuring, and designing. In this position, she would design any storage solution, from mudrooms to primary closets. In her role as Interior Design Consultant with Floor and Décor, Katie led residential projects and partnered on commercial projects. Some of her notable projects include: managing floor and tile design for a 6,000 sq. ft. spec home, and selecting floor and tile for a new-build duplex in Nigeria. During this time, Katie also designed several residential projects.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Custom Design Center" },
    { name: "Sketchup" },
    { name: "Maticad - Tile Planner" },
    { name: "Residential Design" },
    { name: "Commercial Design" },
  ],
  softSkills: [
    { name: "Presentations" },
    { name: "Detail Oriented" },
    { name: "Project Management" },
    { name: "Budgeting" },
    { name: "Sketching" },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I’m currently looking for full-time Interior Designer opportunities in either residential or commercial settings. If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email at",
  email: "kaitlin.ridge1@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'In-Home Design Specialist ',// The Container Store
      companylogo: require('../assets/img/thecontainerstore.jpeg'),
      date: 'February 2023 - December 2023',
    },
    {
      role: 'Interior Design Consultant ',// Floor and Decor
      companylogo: require('../assets/img/floor&decor.jpeg'),
      date: 'January 2022 - September 2022',
    },
    {
      role: 'Decorative Sales Associate',
      companylogo: require('../assets/img/floor&decor.jpeg'),
      date: 'September 2021 - December 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: true,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
