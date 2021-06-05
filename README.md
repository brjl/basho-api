# basho-api

```
Taking a nap,
Feet planted
Against a cool wall.
```

Serving haiku by [Matsuo Bashō](https://en.wikipedia.org/wiki/Matsuo_Bash%C5%8D), correct line formatting included. 
There are almost 350 haiku at the moment, which includes some alternate translations.

Haiku are taken from [here.](https://gist.github.com/jeffThompson/fd0d5486b8e6498b9520)

### How to use

Make a GET request with your method of choice to (web address here) and you will receive a bunch of haiku.

Though the database entries are formatted correctly with line breaks, these won't translate directly into, say, your React front-end. In this case, use something along the lines of

```
.split("\n").map((i, key) => {
            return <div key={key}>{i}</div>;
          })
```
to preserve the line breaks for display.


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