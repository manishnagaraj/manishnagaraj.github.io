// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Some of the projects I have worked on and am working on!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Latest CV of Manish Nagaraj",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-blog-post-on-federated-learning",
        
          title: "Blog post on Federated Learning",
        
        description: "Blog post during internship",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/latentai-blog/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-graduated-with-a-masters-degree-from-purdue-university-sparkles-smile",
          title: 'Graduated with a Masters’ degree from Purdue University. :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-started-interning-at-latentai",
          title: 'Started interning at  LatentAI  !',
          description: "",
          section: "News",},{id: "news-presented-dotie-at-icra-2023-london",
          title: 'Presented DOTIE at ICRA 2023, London!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-check-out-my-video-interview-at-latent-ai",
          title: 'Check out my  video interview  at Latent AI',
          description: "",
          section: "News",},{id: "news-tofu-got-accepted-for-publication-at-ieee-access",
          title: 'TOFU got accepted for publication at IEEE Access.',
          description: "",
          section: "News",},{id: "news-i-got-featured-in-the-student-spotlight-blog-at-nrl",
          title: 'I got featured in the   Student Spotlight Blog  at NRL',
          description: "",
          section: "News",},{id: "news-i-passed-my-preliminary-examination",
          title: 'I passed my preliminary examination!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_8/";
            },},{id: "projects-dotie",
          title: 'DOTIE',
          description: "Detecting Objects through Temporal Isolation of Events",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Dotie/";
            },},{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/241/0695.html", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%6E%61%67%61%72%61@%70%75%72%64%75%65.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/manishnagaraj", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/m-nagaraj", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-2032-9175", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=K-ihHacAAAAJ", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/153839324", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
