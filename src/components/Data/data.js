function addData(id, title, content, stack, links) {
  return {
    id,
    title,
    content,
    stack,
    links,
    postedDate: "",
  };
}

const project1 = addData();
project1.id = 1;
project1.title = "Contacts/Address Book App";
project1.content =
  "An app to manage all your contacts. Supports multiple emails, phone numbers, addresses, and social media profiles.";
project1.stack = [
  "Reactjs",
  "Django",
  "DRF",
  "Rest APIs",
  "HTML",
  "CSS",
  "Bootstrap",
  "Javascript",
  "Python",
  "Heroku",
];
project1.links = {
  Frontend: "https://github.com/tahakhan0/Contacts-App-with-Reactjs-Frontend",
  Backend: "https://github.com/tahakhan0/Contacts-App-with-Django-Backend",
  Demo: "https://contacts-app-reactjs-frontend.herokuapp.com/",
};
project1.postedDate = "11/11/2020";

const project2 = addData();

project2.id = 2;
project2.title = "Covid Travel Assistant";
project2.content =
  "An app to deliver the latest news and guidelines of top-10 countries that are affected by Covid-19. Information is obtained only from credible government resources and written into an CSV format, and then manually checked for further corrections.";
project2.stack = [
  "Reactjs",
  "Django",
  "DRF",
  "Rest APIs",
  "Web-Scraping",
  "Beautiful Soup",
  "HTML",
  "CSS",
  "Bootstrap",
  "Javascript",
  "Python",
  "Heroku",
];
project2.links = {
  Frontend: "",
  Backend: "",
  Demo: "https://covid-travel-assitant.herokuapp.com/",
};
project2.postedDate = "11/03/2020";

const project3 = addData();
project3.id = 3;
project3.title = "MovieFlix";
project3.content =
  "A movie library app that can be used by DVD rental businesses to operate their business.";
project3.stack = [
  "Reactjs",
  "Django",
  "DRF",
  "Rest APIs",
  "HTML",
  "CSS",
  "Bootstrap4",
  "imdb API",
  "Heroku",
  "Javascript",
  "Python",
];
project3.links = {
  Frontend: "https://github.com/tahakhan0/MovieFlix_Frontend_Reactjs",
  Backend: "https://github.com/tahakhan0/MovieFlix_Backend",
  Demo: "https://bibliotheque-mandarine-11131.herokuapp.com/movies",
};
project3.postedDate = "09/16/2020";

const project5 = addData();
project5.id = 5;
project5.title = "Snow Dozer";
project5.content =
  "A web application that works with a Raspberry Pi to control an autonoumous heating system. The system receives data from an Darksky's weather api and does internal calculations to determine the correct timing and period of work for the heating system.";
project5.stack = [
  "Flask",
  "HTML",
  "CSS",
  "Bootstrap4",
  "Darksky API",
  "Heroku",
  "Python",
];
project5.links = {
  Frontend: "https://github.com/tahakhan0/SnowDozer",
  Demo: "https://data-collector-ece.herokuapp.com/",
};
project5.postedDate = "04/05/2020";

const project4 = addData();
project4.id = 4;
project4.title = "This Portfolio";
project4.content =
  "My way of giving back to fellow developers that want to build their portfolio in the easiest way.";
project4.stack = ["Reactjs", "HTML", "CSS"];
project4.links = {
  Frontend: "https://github.com/tahakhan0/Portfolio",
};
project4.postedDate = "11/19/2020";

function getAllData(...allfunctions) {
  return allfunctions;
}

const callGetAllData = getAllData(
  project1,
  project2,
  project3,
  project4,
  project5
);

export default callGetAllData;
