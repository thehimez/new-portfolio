"use client";

import { motion } from "framer-motion";
import GradualSpacing from "./GradualSpacing";

export default function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // ⭐ Projects (these are placeholders — replace video files with yours)
  const projects = [
    {
      id: 1,
      logo: "T",
      title: "Todo App",
      year: "2025",
      description:
        "A fast, minimal, cloud-powered todo application built with modern frontend + backend.",
      link: "https://todo.himeshbhowmik.xyz",
      video: "/videos/project1.mp4",
    },
    {
      id: 2,
      logo: "N",  
      title: "Notes App",
      year: "2025",
      description:
        "A notes-making app with smooth UI/UX and persistent cloud storage.",
      link: "https://note.himeshbhowmik.xyz",
      video: "/videos/project2.mp4",
    },
  ];

  // ⭐ Work Experience — from CV
  const work = [
    {
      id: 1,
      logo: "BS",
      title: "Founder @ Beyond Sphere",
      year: "Mar 2025 – Present",
      description:
        "Produced 45+ short-form videos, achieving 8.7K+ views and 83 subscribers. Used Filmora, InVideo, ChatGPT, YouTube SEO, and analytics to grow efficiently.",
    },
    {
      id: 2,
      logo: "GX",
      title: "Software Project Manager @ Galaxismart",
      year: "2019 – 2022",
      description:
        "Led software development for a student-driven startup. Managed backend, UI/UX, hosting, domain, and a cross-functional team.",
    },
  ];

  // ⭐ Awards — from CV
  const awards = [
    {
      id: 1,
      logo: "🏆",
      title: "American Mathematics Competitions (AMC)",
      year: "Year not specified",
      description:
        "Participated in AMC, demonstrating strong mathematical problem-solving skills.",
      video: "/videos/award1.mp4",
    },
  ];

  // ⭐ Education — from CV
  const education = [
    {
      id: 1,
      logo: "🎓",
      title: "High School — Don Bosco School Udaipur Gomti",
      year: "2023 – 2025",
      description:
        "Studied Mathematics and Computer Science. Completed high school education with strong analytical foundations.",
    },
  ];

  // ⭐ Skills — from CV
  const skills = ["Node.js", "Express.js", "n8n Automation", "React.js", "Next.js"];

  // ⭐ Social + App Links
  const socialLinks = [
    { icon: "/LinkedIn_logo.png", type: "image", label: "LinkedIn", href: "https://www.linkedin.com/in/thehimez" },
    { icon: "/Github_logo.png", type: "image", label: "GitHub", href: "https://github.com/thehimez" },
    { icon: "📋", type: "emoji", label: "Todo App", href: "https://todo.himeshbhowmik.xyz" },
    { icon: "📝", type: "emoji", label: "Notes App", href: "https://note.himeshbhowmik.xyz" },
    { icon: "✉️", type: "emoji", label: "Email", href: "mailto:himeshstark20@gmail.com" },
  ];


  return (
    <div className="min-h-screen py-10 px-4 bg-background text-foreground">

      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* HEADER */}
        <motion.header className="text-center mb-20" variants={itemVariants}>
          <motion.div
            className="flex flex-col items-center gap-6 mb-8"
            variants={itemVariants}
          >
            {/*Icon*/}
            <motion.div
              className="w-32 h-32 rounded-full overflow-hidden shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/profile.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Name + Location */}
            <div>
              <GradualSpacing
                text="Himesh Bhowmik"
                className="text-5xl font-bold mb-2"
              />

              <motion.p className="text-gray-500" variants={itemVariants}>
                Bangalore Rural, Karnataka, India
              </motion.p>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.p
            className="text-lg max-w-xl mx-auto mb-8 leading-relaxed text-gray-700"
            variants={itemVariants}
          >
            Aspiring entrepreneur passionate about technology-driven startups,
            market research, and solving real-world problems through innovative
            software. Former project manager and content creator with 8.7K+
            video views.  
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            variants={itemVariants}
          >
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow hover:shadow-lg transition"
                whileHover={{ y: -2 }}
              >
                {/* If icon is an image */}
                {link.type === "image" ? (
                  <img
                    src={link.icon}
                    alt={link.label}
                    className="w-5 h-5 object-contain"
                  />
                ) : (
                  <span className="text-lg">{link.icon}</span>
                )}

                {link.label}
              </motion.a>
            ))}

          </motion.div>
        </motion.header>

        {/* SKILLS */}
        <motion.section className="mb-20" variants={itemVariants}>
          <GradualSpacing
            text="Skills"
            className="text-4xl font-bold mb-8"
          />
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={i}
                variants={itemVariants}
                className="px-4 py-2 bg-white rounded-full shadow text-gray-800"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section className="mb-20" variants={itemVariants}>
          <GradualSpacing
            text="Projects"
            className="text-4xl font-bold mb-8"
          />
          <div className="space-y-6">
            {projects.map((proj) => (
              <motion.div
                key={proj.id}
                className="bg-white rounded-2xl p-8 shadow hover:shadow-lg"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-5 mb-5">
                  <div className="w-16 h-16 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-xl font-bold">
                    {proj.logo}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">
                      <a href={proj.link} className="hover:text-indigo-600">
                        {proj.title}
                      </a>
                    </h3>
                    <p className="text-gray-500">{proj.year}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-5">{proj.description}</p>

                <video
                  className="w-full rounded-xl"
                  controls
                  muted
                  playsInline
                  loop
                >
                  <source src={proj.video} type="video/mp4" />
                </video>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* AWARDS */}
        <motion.section className="mb-20" variants={itemVariants}>
          <GradualSpacing
            text="Awards"
            className="text-4xl font-bold mb-8"
          />
          {awards.map((award) => (
            <motion.div
              key={award.id}
              className="bg-white rounded-2xl p-8 shadow mb-6"
              variants={itemVariants}
            >
              <div className="flex items-center gap-5 mb-4">
                <div className="w-16 h-16 bg-indigo-600 rounded-xl text-white text-3xl flex items-center justify-center">
                  {award.logo}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{award.title}</h3>
                  <p className="text-gray-500">{award.year}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{award.description}</p>

              <video className="w-full rounded-xl" controls muted loop>
                <source src={award.video} type="video/mp4" />
              </video>
            </motion.div>
          ))}
        </motion.section>

        {/* WORK EXPERIENCE */}
        <motion.section className="mb-20" variants={itemVariants}>
          <GradualSpacing
            text="Work Experience"
            className="text-4xl font-bold mb-8"
          />
          {work.map((job) => (
            <motion.div
              key={job.id}
              className="bg-white rounded-2xl p-8 shadow mb-6"
              variants={itemVariants}
            >
              <div className="flex items-center gap-5 mb-4">
                <div className="w-16 h-16 bg-purple-600 rounded-xl text-white text-2xl flex items-center justify-center">
                  {job.logo}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{job.title}</h3>
                  <p className="text-gray-500">{job.year}</p>
                </div>
              </div>

              <p className="text-gray-600">{job.description}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* EDUCATION */}
        <motion.section className="mb-20" variants={itemVariants}>
          <GradualSpacing
            text="Education"
            className="text-4xl font-bold mb-8"
          />

          {education.map((edu) => (
            <motion.div
              key={edu.id}
              className="bg-white rounded-2xl p-8 shadow mb-6"
              variants={itemVariants}
            >
              <div className="flex items-center gap-5 mb-4">
                <div className="w-16 h-16 bg-purple-700 rounded-xl text-white text-3xl flex items-center justify-center">
                  {edu.logo}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{edu.title}</h3>
                  <p className="text-gray-500">{edu.year}</p>
                </div>
              </div>

              <p className="text-gray-600">{edu.description}</p>
            </motion.div>
          ))}
        </motion.section>
      </motion.div>
    </div>
  );
}
