# ![Logo](./public/images/icons-png/256x256.png)

[![GitHub license](https://img.shields.io/github/license/pedro-henrique-sb/count-timer?color=%2334CB84&style=flat-square)](https://github.com/pedro-henrique-sb/count-timer/blob/main/LICENSE)

This repository contains an application that manages your future events such as meetings, parties, lectures, etc. Of course, with a nice interface.

## Demonstration

![Demonstration](./public/images/count-timer-demo.gif)

## Technologies used

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [better-sqlite3](https://github.com/JoshuaWise/better-sqlite3)
- [Electron](https://electronjs.org)
- [Nunjucks](https://mozilla.github.io/nunjucks/)

## How to install it

### Download the executables to

- [Linux (.deb)](https://github.com/pedro-henrique-sb/count-timer/releases/latest)
- [MacOS (.app)](https://github.com/pedro-henrique-sb/count-timer/releases/latest)

```text
THIS IS NOT A COMMERCIAL APPLICATION. THEREFORE IT IS NOT THE RESPONSIBILITY OF THE CREATOR OR MAINTAINERS TO PAY THE RESPONSIBILITIES FOR ANY ERRORS OR PROBLEMS THAT WILL HAPPEN TO HAPPEN WITH THE USE OF THE SAME. SO, BY INSTALLING IT, YOU AGREE TO TAKE TOTAL RISK WITH ANY UNEXPECTED PROBLEM THAT MAY ARISE.
```

Remember that to generate an executable for this program you need to have Nodejs, npm and git installed. If not, search for reliable sources on how to install them.

With that done open your terminal and execute the following commands:

```bash

  #clones the repository on your computer
  $git clone https://github.com/pedro-henrique-sb/count-timer.git

  #access the cloned repository
  $cd count-timer/

  #installs all dependencies
  $npm install

  #rebuilds native dependencies
  $npm run postinstall

  #generates a file that can be installed
  $npm run make

```

If everything went as expected you will have an out folder in the project folder. Entering the make subfolder you will see your file for installation. From there, just follow a normal installation process. If this does not work please check that you have followed all instructions correctly and try to repeat the last three commands. If it still doesn't work, let us know what happened [here](https://github.com/pedro-henrique-sb/count-timer/issues).

---

Created by [Pedro Henrique](https://linkedin.com/in/pedro-henrique-b96916208)
