const { publish } = require("gh-pages");

publish(
	"build",
	{
		branch: "production",
		remote: "origin",
	},
	function (err) {
		if (err) {
			console.log("Error publishing to GitHub Pages", err);
		} else {
			console.log("Published to GitHub Pages");
		}
	}
);
