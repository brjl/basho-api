# basho-api

```
Taking a nap,
Feet planted
Against a cool wall.
```

Serving haiku by [Matsuo Bashō](https://en.wikipedia.org/wiki/Matsuo_Bash%C5%8D), correct line formatting included. 
There are almost 350 haiku at the moment, which includes some alternate translations.

Haiku are taken from [here.](https://gist.github.com/jeffThompson/fd0d5486b8e6498b9520)

[Here's a simple example React front end to display haiku](https://github.com/brjl/basho)

### How to use

Make a GET request with your method of choice to https://basho-api.herokuapp.com/haiku and you will receive a bunch of haiku.

Though the database entries are formatted correctly with line breaks, these won't translate directly into your front-end. In this case, use something along the lines of
```
white-space: pre-line;
```
in a CSS class that contains the haiku text to preserve the line breaks for display.


For running the API locally:

1. Clone the repo
2. Install dependencies
3. Run the create.sql file in postgreSQL
4. Start the server in your local environment
5. ???
6. Profit

### Dependencies

- express
- dotenv
- pg

```
Exhausted, I sought 
a country inn, but found 
wisteria in bloom 
```