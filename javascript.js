var counter = 0;

var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
$("#targetNumber").text(targetNumber);


var wins = 0;

var losses = 0;

var rubyNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

var sapphireNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

var emeraldNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

var amethystNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

// 4 of 4 
// How to push periodically to github?

$(".ruby-image").on("click", function () {
	counter += rubyNumber;
	$("#yourTotalScore").text(counter);
	
	if (counter === targetNumber) {
		wins++;
		$("#wins").text(wins);
		counter = 0;
		$("#yourTotalScore").text(counter);
		targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		$("#targetNumber").text(targetNumber);
		rubyNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		sapphireNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		emeraldNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		amethystNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		alert("You win!");
	}

	else if (counter > targetNumber) {
		losses++;
		$("#losses").text(losses);
		counter = 0;
		$("#yourTotalScore").text(counter);
		targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		$("#targetNumber").text(targetNumber);
		rubyNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		sapphireNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		emeraldNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		amethystNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		alert("You lose!");
	}
});

$(".sapphire-image").on("click", function () {
	counter += sapphireNumber;
	$("#yourTotalScore").text(counter);
	
	if (counter === targetNumber) {
		wins++;
		$("#wins").text(wins);
		counter = 0;
		$("#yourTotalScore").text(counter);
		targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		$("#targetNumber").text(targetNumber);
		rubyNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		sapphireNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		emeraldNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		amethystNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		alert("You win!");
	}

	else if (counter > targetNumber) {
		losses++;
		$("#losses").text(losses);
		counter = 0;
		$("#yourTotalScore").text(counter);
		targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		$("#targetNumber").text(targetNumber);
		rubyNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		sapphireNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		emeraldNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		amethystNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		alert("You lose!");
	}
});

$(".emerald-image").on("click", function () {
	counter += emeraldNumber;
	$("#yourTotalScore").text(counter);
	
	if (counter === targetNumber) {
		wins++;
		$("#wins").text(wins);
		counter = 0;
		$("#yourTotalScore").text(counter);
		targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		$("#targetNumber").text(targetNumber);
		rubyNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		sapphireNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		emeraldNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		amethystNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		alert("You win!");
	}

	else if (counter > targetNumber) {
		losses++;
		$("#losses").text(losses);
		counter = 0;
		$("#yourTotalScore").text(counter);
		targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		$("#targetNumber").text(targetNumber);
		rubyNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		sapphireNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		emeraldNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		amethystNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		alert("You lose!");
	}
});

$(".amethyst-image").on("click", function () {
	counter += amethystNumber;
	$("#yourTotalScore").text(counter);
	
	if (counter === targetNumber) {
		wins++;
		$("#wins").text(wins);
		counter = 0;
		$("#yourTotalScore").text(counter);
		targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		$("#targetNumber").text(targetNumber);
		rubyNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		sapphireNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		emeraldNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		amethystNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		alert("You win!");
	}

	else if (counter > targetNumber) {
		losses++;
		$("#losses").text(losses);
		counter = 0;
		$("#yourTotalScore").text(counter);
		targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		$("#targetNumber").text(targetNumber);
		rubyNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		sapphireNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		emeraldNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		amethystNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

		alert("You lose!");
	}
});