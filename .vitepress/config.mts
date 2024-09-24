import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "포트폴리오 - 권혁진",
  description: "권혁진 포트폴리오 사이트",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "소개", link: "/about" },
      { text: "프로젝트", link: "/projects" },
      { text: "연락하기", link: "/contact" },
    ],

    sidebar: [
      { text: "소개", link: "/about" },
      {
        text: "프로젝트",
        items: [
          {
            text: "2024",
            link: "/markdown-examples",
            items: [{ text: "오늘의 햇빛(개인)", link: "/projects/lux" }],
          },
          {
            text: "2022",
            link: "/markdown-examples",
            items: [
              { text: "실시간 이자계산기(개인)", link: "/projects/staking" },
              { text: "블루노트 정답지(개인)", link: "/projects/bluenote" },
            ],
          },
          { text: "Runtime API Examples", link: "/api-examples" },
          { text: "markdown-examples", link: "/markdown-examples" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/3437k" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/jinme/" },
    ],
    footer: {
      copyright: `© 권혁진 2024`,
    },
  },
});
