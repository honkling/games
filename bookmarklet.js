(async () => {
    const response = await fetch("https://raw.githubusercontent.com/honkling/games/master/games.js");
    const script = await response.text();

    eval(script);
})();