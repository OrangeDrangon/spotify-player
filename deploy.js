const ghPages = require("gh-pages");

const username = process.argv[2];
const token = process.argv[3];

if (username) {
  if (token) {
    ghPages.publish("build", {
      message: "Deploying app...",
      repo:  `https://${username}:${token}@github.com/OrangeDrangon/spotify-player.git`,
      silent: false
    }, (err) => {
      if (err) {
        throw err;
      }
      console.log("Success!");
    });
  } else {
    throw new Error("Token not provided");
  }
} else {
  throw new Error("Username not provided");
}
