const resources = [
  {
    name: "FreeCodeCamp",
    description: "Learn to code for free.",
    link: "https://www.freecodecamp.org",
  },
  {
    name: "Khan Academy",
    description: "Free courses on various subjects.",
    link: "https://www.khanacademy.org",
  },
  {
    name: "Codecademy",
    description: "Interactive coding lessons.",
    link: "https://www.codecademy.com",
  },
  {
    name: "Coursera",
    description: "Online courses from top universities.",
    link: "https://www.coursera.org",
  },
  {
    name: "edX",
    description: "Access online courses from universities.",
    link: "https://www.edx.org",
  },
  {
    name: "Udemy",
    description: "Affordable online courses on various topics.",
    link: "https://www.udemy.com",
  },
  {
    name: "MIT OpenCourseWare",
    description: "Free lecture notes, exams, and videos from MIT.",
    link: "https://ocw.mit.edu",
  },
  {
    name: "LeetCode",
    description: "Practice coding challenges for interviews.",
    link: "https://leetcode.com",
  },
  {
    name: "HackerRank",
    description: "Practice coding challenges and prep for interviews.",
    link: "https://www.hackerrank.com",
  },
  {
    name: "GeeksforGeeks",
    description: "Computer science tutorials and interview prep.",
    link: "https://www.geeksforgeeks.org",
  },
  {
    name: "AtCoder",
    description: "Competitive programming platform.",
    link: "https://atcoder.jp",
  },
  {
    name: "Google Code Jam",
    description: "Global coding competition hosted by Google.",
    link: "https://codingcompetitions.withgoogle.com/codejam",
  },
  {
    name: "Harvard Online Learning",
    description: "Courses from Harvard University.",
    link: "https://online-learning.harvard.edu",
  },
  {
    name: "Stanford Online",
    description: "Free and paid courses from Stanford University.",
    link: "https://online.stanford.edu",
  },
  {
    name: "The Odin Project",
    description: "Free full-stack development curriculum.",
    link: "https://www.theodinproject.com",
  },
  {
    name: "W3Schools",
    description: "Tutorials for web development and programming.",
    link: "https://www.w3schools.com",
  },
  {
    name: "Mozilla Developer Network",
    description: "Web docs and tutorials for developers.",
    link: "https://developer.mozilla.org",
  },
  {
    name: "Pluralsight",
    description: "Technology skills platform.",
    link: "https://www.pluralsight.com",
  },
  {
    name: "Class Central",
    description: "Free and paid courses from various platforms.",
    link: "https://www.classcentral.com",
  },
  {
    name: "LinkedIn Learning",
    description: "Online learning from LinkedIn.",
    link: "https://www.linkedin.com/learning",
  },
  {
    name: "SoloLearn",
    description: "Free coding lessons and challenges.",
    link: "https://www.sololearn.com",
  },
  {
    name: "Project Euler",
    description: "Mathematical problems for coding practice.",
    link: "https://projecteuler.net",
  },
  {
    name: "Edureka",
    description: "Online courses in software and technology.",
    link: "https://www.edureka.co",
  },
  {
    name: "DataCamp",
    description: "Learn data science and machine learning.",
    link: "https://www.datacamp.com",
  },
  {
    name: "Kaggle",
    description: "Data science competitions and datasets.",
    link: "https://www.kaggle.com",
  },
  {
    name: "Exercism",
    description: "Practice coding exercises in 50+ languages.",
    link: "https://exercism.io",
  },
  {
    name: "Brilliant",
    description: "Interactive learning in math and science.",
    link: "https://brilliant.org",
  },
  {
    name: "TopCoder",
    description: "Competitive programming and crowdsourcing platform.",
    link: "https://www.topcoder.com",
  },
  {
    name: "Codewars",
    description: "Challenge yourself with code katas.",
    link: "https://www.codewars.com",
  },
  {
    name: "Codeforces",
    description: "Competitive programming challenges.",
    link: "https://codeforces.com",
  },
  {
    name: "HackerEarth",
    description: "Technical assessment and coding challenges.",
    link: "https://www.hackerearth.com",
  },
  {
    name: "Dev.to",
    description: "Community for developers with tutorials and resources.",
    link: "https://dev.to",
  },
  {
    name: "JavaTpoint",
    description: "Tutorials for Java, Android, SQL, and more.",
    link: "https://www.javatpoint.com",
  },
  {
    name: "CodePen",
    description: "Online code editor for front-end development.",
    link: "https://codepen.io",
  },
  {
    name: "Scrimba",
    description: "Interactive coding tutorials with a focus on JavaScript.",
    link: "https://scrimba.com",
  },
  {
    name: "FrontEnd Mentor",
    description: "Practice front-end development with real challenges.",
    link: "https://www.frontendmentor.io",
  },
  {
    name: "CSS-Tricks",
    description: "Tips, tricks, and tutorials for CSS.",
    link: "https://css-tricks.com",
  },
  {
    name: "Codementor",
    description: "1:1 expert mentorship for developers.",
    link: "https://www.codementor.io",
  },
  {
    name: "Code.org",
    description: "Free coding lessons for beginners.",
    link: "https://code.org",
  },
  {
    name: "DigitalOcean Tutorials",
    description: "Guides for cloud, development, and DevOps.",
    link: "https://www.digitalocean.com/community/tutorials",
  },
  {
    name: "GitHub Learning Lab",
    description: "Learn GitHub workflows and open-source contributions.",
    link: "https://lab.github.com",
  },
  {
    name: "LeetCode Discuss",
    description: "Coding discussions and interview prep.",
    link: "https://leetcode.com/discuss",
  },
  {
    name: "Real Python",
    description: "In-depth Python tutorials.",
    link: "https://realpython.com",
  },
  {
    name: "Hackr.io",
    description: "Find the best programming tutorials.",
    link: "https://hackr.io",
  },
  {
    name: "Tech With Tim",
    description: "Programming tutorials, primarily Python.",
    link: "https://techwithtim.net",
  },
  {
    name: "Towards Data Science",
    description: "Articles and tutorials on data science.",
    link: "https://towardsdatascience.com",
  },
  {
    name: "JetBrains Academy",
    description: "Learn to code with project-based learning.",
    link: "https://www.jetbrains.com/academy",
  },
  {
    name: "Full Stack Open",
    description: "Free full-stack web development course.",
    link: "https://fullstackopen.com",
  },
  {
    name: "CS50 by Harvard",
    description: "Free introductory computer science course.",
    link: "https://cs50.harvard.edu",
  },
  {
    name: "Google Developer Training",
    description: "Learn Android, Firebase, and Web development.",
    link: "https://developers.google.com/learn",
  },
  {
    name: "Hack The Box",
    description: "Cybersecurity and penetration testing challenges.",
    link: "https://www.hackthebox.com",
  },
  {
    name: "OpenAI",
    description: "Learn about AI and GPT models.",
    link: "https://openai.com",
  },
  {
    name: "Stanford AI Courses",
    description: "Free AI and machine learning courses from Stanford.",
    link: "https://ai.stanford.edu/education",
  },
  {
    name: "Learn Anything",
    description: "Interactive map to explore learning resources.",
    link: "https://learn-anything.xyz",
  },
  {
    name: "Springboard",
    description: "Bootcamps and courses in AI, data science, and more.",
    link: "https://www.springboard.com",
  },
  {
    name: "Hackr.io",
    description: "Find tutorials for any programming language.",
    link: "https://hackr.io",
  },
  {
    name: "Educative.io",
    description: "Interactive text-based courses.",
    link: "https://www.educative.io",
  },
  {
    name: "Flutter.dev",
    description: "Official resources for Flutter development.",
    link: "https://flutter.dev",
  },
  {
    name: "Figma Learning",
    description: "Learn to design with Figma.",
    link: "https://www.figma.com/learn",
  },
  {
    name: "AI Dungeon",
    description: "Explore AI-powered storytelling.",
    link: "https://play.aidungeon.io",
  },
  {
    name: "One Month",
    description: "Learn programming, web dev, and data in one month.",
    link: "https://www.onemonth.com",
  },
  {
    name: "Microsoft Learn",
    description: "Free learning paths for Microsoft technologies.",
    link: "https://learn.microsoft.com",
  },
  {
    name: "FreeCodeCamp News",
    description: "Developer tutorials and guides.",
    link: "https://www.freecodecamp.org/news",
  },
  {
    name: "Web.dev",
    description: "Google's resources for modern web development.",
    link: "https://web.dev",
  },
  {
    name: "Design+Code",
    description: "Learn design and code for the modern web.",
    link: "https://designcode.io",
  },
  {
    name: "A Cloud Guru",
    description: "Cloud computing training and certifications.",
    link: "https://acloudguru.com",
  },
  {
    name: "Skillshare",
    description: "Online learning community.",
    link: "https://www.skillshare.com",
  },
  {
    name: "Databricks Academy",
    description: "Learn about big data and data science.",
    link: "https://academy.databricks.com",
  },
  {
    name: "Svelte Tutorial",
    description: "Interactive tutorial for Svelte framework.",
    link: "https://svelte.dev/tutorial",
  },
  {
    name: "PyImageSearch",
    description: "Tutorials for computer vision and OpenCV in Python.",
    link: "https://www.pyimagesearch.com",
  },
  {
    name: "PyTorch Tutorials",
    description: "Official tutorials for learning PyTorch.",
    link: "https://pytorch.org/tutorials",
  },
  {
    name: "TensorFlow Hub",
    description: "Learn TensorFlow and deep learning.",
    link: "https://www.tensorflow.org",
  },
  {
    name: "Webflow University",
    description: "Learn no-code web development with Webflow.",
    link: "https://university.webflow.com",
  },
  {
    name: "Treehouse",
    description: "Tech learning platform for beginners.",
    link: "https://teamtreehouse.com",
  },
  {
    name: "Project X",
    description: "X Program for mastering coding.",
    link: "https://projectx.com",
  },
  {
    name: "Frontend Masters",
    description: "In-depth web development courses.",
    link: "https://frontendmasters.com",
  },
  {
    name: "Nucamp",
    description: "Affordable coding bootcamp for beginners.",
    link: "https://www.nucamp.co",
  },
  {
    name: "Lambda School",
    description: "Income share agreement coding school.",
    link: "https://lambdaschool.com",
  },
  {
    name: "Odin Fullstack",
    description: "Project-based learning in fullstack development.",
    link: "https://odinproject.com/fullstack",
  },
  {
    name: "Hypertext",
    description: "Learn the history and techniques behind the web.",
    link: "https://hypertext.io",
  },
  {
    name: "Flutter Flow",
    description: "Low-code platform for building Flutter apps.",
    link: "https://flutterflow.io",
  },
  {
    name: "OpenCode",
    description: "Platform for open source learning.",
    link: "https://opencode.com",
  },
  {
    name: "RunCloud",
    description: "Cloud server management for developers.",
    link: "https://runcloud.io",
  },
  {
    name: "Coding Ninjas",
    description: "Courses and challenges to learn coding.",
    link: "https://www.codingninjas.com",
  },
  {
    name: "Fireship.io",
    description: "High-quality web development tutorials.",
    link: "https://fireship.io",
  },
  {
    name: "Netlify Learn",
    description: "Learn web development with Netlify tools.",
    link: "https://learn.netlify.com",
  },
  {
    name: "Docker Docs",
    description: "Official tutorials and documentation for Docker.",
    link: "https://docs.docker.com",
  },
  {
    name: "Firebase Tutorials",
    description: "Learn Firebase for web and mobile apps.",
    link: "https://firebase.google.com/docs",
  },
  {
    name: "Next.js Learn",
    description: "Official learning path for Next.js.",
    link: "https://nextjs.org/learn",
  },
  {
    name: "Rust Lang Book",
    description: "The official book for learning Rust programming.",
    link: "https://doc.rust-lang.org/book",
  },
  {
    name: "Free APIs",
    description: "A collection of free APIs for learning and projects.",
    link: "https://free-apis.com",
  },
  {
    name: "Vercel Docs",
    description: "Learn Vercel for front-end deployment.",
    link: "https://vercel.com/docs",
  },
  {
    name: "Hashnode",
    description: "Developer blogging platform and community.",
    link: "https://hashnode.com",
  },
  {
    name: "Quora Programming",
    description: "Learn from answers to programming questions.",
    link: "https://www.quora.com/topic/Programming",
  },
  {
    name: "Opencode Society",
    description: "Learn coding from contributors.",
    link: "https://opencode.org/society",
  },
];

// Function to generate HTML for each resource card
function generateCard(resource) {
  return `
        <div class="card">
            <h2>${resource.name}</h2>
            <p>${resource.description}</p>
            <a href="${resource.link}" target="_blank">Visit Resource</a>
        </div>
    `;
}

// Select the container where the cards will be injected
const cardsContainer = document.getElementById("cards-container");

// Inject the generated cards into the container
cardsContainer.innerHTML = resources.map(generateCard).join("");
