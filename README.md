# REMOVE BACKGROUND FOR NODE.JS

Library for remove image background for node and python

<p align="center">
   <img src="https://img.shields.io/bower/l/MI?style=flat-square">
   <img src="https://img.shields.io/badge/version-1.0.3-blue">
   <img src="https://img.shields.io/npm/dy/remove-bg-node">
   <img alt="npm" src="https://img.shields.io/npm/dm/remove-bg-node">
   <img alt="npm" src="https://img.shields.io/npm/dw/remove-bg-node">
   <img src="https://img.shields.io/github/issues/rhaymisonbetini/remove-bg-node.svg">
   <img src="https://img.shields.io/github/issues-closed/rhaymisonbetini/remove-bg-node.svg">
   <img src="https://img.shields.io/github/issues-pr/rhaymisonbetini/remove-bg-node.svg">
   <img src="https://img.shields.io/github/issues-pr-closed/rhaymisonbetini/remove-bg-node.svg">
</p>

<p align="center">
   <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
   <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/heleno-betini-2b3016175/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
  </a>
  <a href="https://github.com/rhaymisonbetini" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
  </a>
</p>

# INSTALL

To use this library you will need to have Python installed in your environment.
Ensuring you have Python run the command:
``` shell
pip install rembg
```

Now install our library

```shell
npm install remove-bg-node
```

# HOW TO USE

Import the library on your system with

``` javascript
const RemoveBackground = require('remove-bg-node');
```

or

``` javascript
import RemoveBackground from 'remove-bg-node';
```
Now you must create an instance of your class.

``` javascript
let rm = new RemoveBackground();
```
We will call the main method and we will pass the directory of our image and the directory 
to which we must save our image without the background

full example
```javascript

'use strict'
const RemoveBackground = require('remove-bg-node');
let rm = new RemoveBackground();
let current = __dirname + '/teste/cristian.jpg';
let save = __dirname + '/deploy/cristian.png';
await rm.asyncRemoveBackground(current, save)

```
Result

Before:

<div align="center">
  <img src="./assets/cristian.jpg" width="300" height="300"/>
</div>

After

<div align="center">
  <img src="./assets/cristian.png" width="300" height="300"/>
</div>