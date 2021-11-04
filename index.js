const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function (event) {
	if (event.code === "Enter") {
		search();
	}
});

function search() {
	const input = searchInput.value;

	window.location.href =
		"https://www.google.com/search?q=" +
		input +
		"&oq=" +
		input +
		"&aqs=chrome..69i57j46i433i512j0i433i512j46i433i512j0i433i512j46i433i512l2j46i175i199i512j46i433i512l2.1744j0j7&sourceid=chrome&ie=UTF-8";
}
