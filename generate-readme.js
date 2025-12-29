const fs = require('fs');

const username = 'JuanDaMata';

const readmeContent = `
## 🎲 Status no GitHub
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${username}&theme=transparent&bg_color=000&border_color=30A3DC&show_icons=true&icon_color=30A3DC&title_color=E94D5F&text_color=FFF&locale=pt-br)

---

## 💡 Linguagens
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&bg_color=000&border_color=30A3DC&title_color=E94D5F&text_color=FFF&locale=pt-br)

---

## 🏆 Repositórios
[![Sistema PDV API](https://img.shields.io/badge/Repo-sistema--pdv--API-30A3DC?style=for-the-badge&logo=github&logoColor=white)](https://github.com/${username}/sistema-pdv-API)

[![Sistema Dindin](https://img.shields.io/badge/Repo-Sistema--dindin-E94D5F?style=for-the-badge&logo=github&logoColor=white)](https://github.com/${username}/Sistema-dindin)
`;

fs.writeFileSync('README.md', readmeContent);
