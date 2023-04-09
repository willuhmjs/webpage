---
title: Learning to code?
slug: learning-to-code
date: 2023-04-08
---

Chances are, you're probably interested in learning to code. Learning a programming language is a challenging but fun experience, and there are often multiple ways to go about it. My process involves combing multiple different methods together into a foolproof multi-step solution.

##  Find what interests you

It's imperative to choose a language that suits your goals. While some languages like Rust and C++ can do almost everything, others such as JavaScript, Python, Swift, and SQL have their own niche and specific fields. Since I wanted to create a Discord bot, I chose to learn JavaScript because that is what most people were using. Some specializations for different languages include:

* Python - Data analysis, scientific computing, machine learning, and artificial intelligence.
* HTML/CSS - Building blocks of web development that are used for creating and styling web applications. Almost always used with front-end JavaScript.
* JavaScript - Full stack web development, typically with front-end frameworks like Vue, React, and Svelte, or back-end frameworks like Express, Next.js, and SvelteKit.
* Swift - Apple software development, such as iOS and MacOS.
* SQL - Managing and analyzing relational databases.
* C# - Windows desktop applications and game development with the Unity engine. The ASP.NET framework is also popular for web development.

## Write some practice code

After you've chosen a language, enroll in an online course that requires you to write some practice code. This allows you to learn the syntax of the language and the basic features, such as loops, conditionals, and functions. Some free online resources I recommend are [Codecademy](https://www.codecademy.com/), [Khan Academy](https://www.khanacademy.org/computing/computer-programming), and [freeCodeCamp](https://www.freecodecamp.org/), as they offer a wide variety of interactive courses for many different languages.

## Make many mistakes

After you dip your toes in the water, try and make some cool projects! You are guaranteed to make various stupid and silly mistakes along the way. While this may seem counterintuitive, this is actually very helpful in giving you a solid foundation in whatever language you are learning.  

For instance, while developing my first Discord bot, I put each piece of command logic inside its own event listener instead of putting them all into one.  

Here is what the code was supposed to look like:

```js:index.js
client.on('message', message => {
    if (message.content === "!ping") {
        message.reply("Pong!");
    } else if (message.content === "!help") {
        message.reply("Sorry, can't help ya!");
    } else if (message.content === "!cookie") {
        message.reply("🍪");
    }
})
```


And this is what I did:
```js:index.js
client.on('message', message => {
    if (message.content === "!ping") {
        message.reply("Pong!");
    } 
});

client.on('message', message => {
    if (message.content === "!help") {
        message.reply("Sorry, can't help ya!");
    }
}); 

client.on('message', message => {
    if (message.content === "!cookie") {
        message.reply("🍪");
    }
}); 
```

This was a naive and ignorant mistake, but I learned from it and became a better developer. By making mistakes, you obtain new skills and gain programming wisdom that will help you later down the line.

## Keep on learning!

While interactive tutorials are great when starting to learn a new programming language, they only get you so far. One way to continue learning a language is to look for documentation, books, tutorial videos, and other resources to refine your knowledge.

Most programming languages have official documentation or books that are valuable tools for learning that language. For instance, JavaScript has the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/javascript), and Rust has the ["the book"](https://doc.rust-lang.org/book/).

YouTube is a great place for informative videos on a variety of coding topics, and I highly recommend it if you like watching others teach you how to code.
