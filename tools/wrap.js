const before = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Groza bezcelowości</title>
  <link rel="stylesheet" href="./tools/style.css">
</head>
<body>
<section class="cover">
  <h1 id="start" class="title">Groza bezcelowości</h1>
  <h4>Scenariusz grozy w klimacie Sci-Fi / Alien</h4>
  <p class="punchline">Rozważanie sensu wykonywanej pracy. Nie po to uciekam w RPG...</p>
</section>
<article>
`;

const after = `
</article>
</body>
</html>
`;

process.stdout.write(before)
process.stdin.pipe(process.stdout)
process.stdin.on('end',_=>process.stdout.write(after))
