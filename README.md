![Electron Notion](https://user-images.githubusercontent.com/64391274/235363274-375ce61c-721f-4543-a150-1b99525d54ac.png)

# windowsGPT
In the fast-paced world of writing, where creativity flows and deadlines loom, we've all experienced those "Aha!" moments mixed with bouts of uncertainty. Picture this: you're knee-deep in an essay, racing against the clock, and suddenly a question pops into your head. You turn to your trusty companions like Google Docs, Word, or Notepad, only to find yourself caught in a web of tabs, sign-ins, and endless searching. Ugh, talk about a buzzkill!

But fear not, dear writer, for we have concocted a sensational solution to rescue you from this harrowing ordeal. Inspired by the sheer brilliance of power toys and their ability to simplify tasks in the Windows universe, we decided to infuse a healthy dose of awesomeness into our creation.
Imagine a world where you can effortlessly chat with a clever GPT companion, right there in your writing zone. No more detours, no more sluggish searches. It's like having a personal writing assistant who's always ready to help, without skipping a beat.

So, we set out on a quest to bring the fun back into writing. Our mission: to blend the magic of power toys with the mind-boggling capabilities of chat GPT. The result? A seamless integration that will revolutionize your writing experience and make those doubtful moments a thing of the past.

## Team members

1. Sreehari Suresh [https://github.com/S-HARI-S]
2. Maheen K [https://github.com/MachoMaheen]

## Link to product walkthrough

https://drive.google.com/file/d/1co2OU57tlmI7pD0ONQ3gVDLy2J-Ib2cL/view?usp=share_link

## How it Works ?

- Our project comprises a central application built on Electron framework, housing the main process. Within this framework, we employ the globalShortcut() function of Electron to monitor a designated keyboard shortcut. Once the shortcut is successfully registered, our application generates a child frameless transparent window, designed with two text areas: the promptTextArea and the responseTextArea. Initially, the responseTextArea remains hidden from view.
- To engage with our system, users input their desired prompt into the promptTextArea. This prompt is subsequently transmitted as a request to the OpenAI API. Upon receiving a response from the API, our application unveils the responseTextArea, displaying the generated response within it

![WindowsGPT demo](https://user-images.githubusercontent.com/92015765/236737353-9451e30b-6923-4d70-8388-1606c2159764.gif)



## Libraries used

- electron : ^23.2.0
- react : ^18.2.0

## How to configure

- node.js must be installed
- npm i

## How to Run

Currently we are not producing a executable program for distributions. you can test our electron application through development environment.
follow these steps:

```npm
npm install
```

```npm
npm run dev 
```

While running your dev server , trigger Ctrl+Alt+T for enabling windowsGPT
