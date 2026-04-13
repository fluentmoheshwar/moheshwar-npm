#!/usr/bin/env node
import * as pc from "picocolors";

const username: string = "fluentmoheshwar";
const email: string = "sayhi@moheshwar.com";

console.log("Hi, I'm Moheshwar Amarnath Biswas.");

console.log(`\nSoftware Developer proficient in building quality websites and apps with various technologies such as Node.js, Astro, Python and others.
`);

console.log(`Links: `);
console.log(`Find me on web: ${pc.blue("https://moheshwar.com")}`);
console.log(
  `You can find me on Facebook: ${pc.blue(`https://facebook.com/${username}`)}`,
);
console.log(
  `You can find me on X: ${pc.blue(`https://x.com/${username}`)}`,
);
console.log(
  `You can find me on Threads: ${pc.blue(`https://threads.com/${username}`)}`,
);
console.log(
  `You can find me on Instagram: ${pc.blue(`https://instagram.com/${username}`)}`,
);
console.log(
  `You can find me on Bluesky: ${pc.blue("https://bsky.app/profile/moheshwar.com")}`,
);
console.log(`You can also reach me at: ${email}`);

console.log(`\nThank you for visiting my profile!`);
