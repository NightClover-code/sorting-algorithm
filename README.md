# Overview

This is a program which makes it easy to sort multiple types of data structures and add more along the way, using bubble sort as an example.

# Goal 🎯

The purpose of this project is to make an easy and intuitive design pattern for developers to add sorting for 
data structures (other than the ones provided with the cli) without starting from scratch, using bubble sort as an example.

# How it works ⚗️

This is a npm package, to get it on your machine run the following command:

```npm i -g sorting-algo-ts@1.1.1```

or 

```yarn global add sorting-algo-ts@1.1.1```

After  downloading the package, run the follwing command:

`sorting-algo-ts start`

You will then be asked to chose the data structure you want to sort, and get the results back.

# Used typescript properties ✨ 

This project uses a lot of typescript features such as:

- Object-oriented programming
- Abstract classes
- `public` modifiers
- Class inheritance
- Types

# Contributing 👥

The project was built to give a solid architecture for developers to add more functionnality as they wish.

As for now, the program enables sorting for 3 data structures.

- Array for numbers
- Strings
- Linked Lists

Feel free to contribute by suggesting different sorting algorithms than bubble sort, or other data structures than the ones listed above

# How do I add a new data structure ?

Go into the `/structures` folder, you'll find typescript files which represents a class for each data structure. To add a new one, add a new typescript file
and a new class in that file, then write the sorting logic using the `swap()` and `compare()` methods.

By the time you added the new class, send a pull request so that I merge yo to the `master` branch.  

## Important Note ⚠️

Every class needs to be a parent of the `Sorter` class, so that it can use the `length` property, and the `swap()` and `compare()` methods. 
To understand more how the design pattern was implemented, check the files in the `/structure` folder.

### Have fun coding 🚀
