const { publish } = require("gh-pages");

publish(
	"./build",
	{
		branch: "site",
		message: "Updated site",
		user: {
			name: process.env.GH_NAME,
			email: process.env.GH_EMAIL,
		}
	},
	function (err) {
		if (err) {
			console.log("Error publishing to GitHub Pages", err);
		} else {
			console.log("Published to GitHub Pages");
		}
	}
);
