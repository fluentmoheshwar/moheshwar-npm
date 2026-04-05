import chalk from "chalk";

const username: string = "fluentmoheshwar";
const email: string = "sayhi@moheshwar.com";

console.log("Hi, I'm Moheshwar Amarnath Biswas.");

console.log(`\nSoftware Developer proficient in building quality websites and apps with various technologies such as Node.js, Astro, Python and others.
`);

console.log(`Links: `);
console.log(`Find me on web: ${chalk.blueBright("https://moheshwar.com")}`);
console.log(
  `You can find me on Facebook: ${chalk.blueBright(`https://facebook.com/${username}`)}`,
);
console.log(
  `You can find me on X: ${chalk.blueBright(`https://x.com/${username}`)}`,
);
console.log(
  `You can find me on Threads: ${chalk.blueBright(`https://threads.com/${username}`)}`,
);
console.log(
  `You can find me on Instagram: ${chalk.blueBright(`https://instagram.com/${username}`)}`,
);
console.log(
  `You can find me on Bluesky: ${chalk.blueBright("https://bsky.app/profile/moheshwar.com")}`,
);
console.log(`You can also reach me at: ${email}`);

console.log(`\nThank you for visiting my profile!`);
