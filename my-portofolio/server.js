const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let projects = [
  {
    name: "Dumbways Mobile App",
    start: "2021-01-01",
    end: "2021-04-01",
    desc: "App that used for dumbways student, it was deployed and can downloaded on playstore. Happy download",
    tech: ["Node Js", "React Js"],
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
  },
  {
    name: "Dumbways Mobile App",
    start: "2021-01-01",
    end: "2021-04-01",
    desc: "App that used for dumbways student, it was deployed and can downloaded on playstore. Happy download",
    tech: ["Node Js", "React Js"],
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=600",
  },
  {
    name: "Dumbways Mobile App",
    start: "2021-01-01",
    end: "2021-04-01",
    desc: "App that used for dumbways student, it was deployed and can downloaded on playstore. Happy download",
    tech: ["Node Js", "React Js"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
  },
  {
    name: "Dumbways Web App",
    start: "2021-02-01",
    end: "2021-03-01",
    desc: "App that used for dumbways student, it was deployed and can downloaded on playstore. Happy download",
    tech: ["Next Js", "TypeScript"],
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=600",
  },
  {
    name: "E-Commerce Platform",
    start: "2021-05-01",
    end: "2021-07-01",
    desc: "Online shopping platform built with modern stack, integrated payment and cart system.",
    tech: ["React Js", "Node Js"],
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=500",
  },
  {
    name: "Company Dashboard",
    start: "2021-10-01",
    end: "2021-12-15",
    desc: "Dashboard system for internal company management and analytics.",
    tech: ["Node Js", "React Js", "TypeScript"],
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500",
  },
];

app.get("/myproject", (req, res) => {
  res.render("myproject", { projects });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/myproject", (req, res) => {
  res.render("myproject");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
