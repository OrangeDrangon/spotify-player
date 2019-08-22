const ghPages = require("gh-pages");

const username = process.argv[2];
const token = process.argv[3];

if (username) {
  if (token) {
    ghPages.publish(
      "build",
      {
        message: "Deploying app...",
        repo: `https://${username}:${token}@github.com/OrangeDrangon/spotify-player.git`,
        silent: true
      },
      err => {
        if (err) {
          console.log(err);
          process.exit(1);
        }
        console.log("Success!");
      }
    );
  } else {
    console.log("Token not provided");
  }
} else {
  console.log("Username not provided");
}
