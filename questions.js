

var entryQuestions = [
  "Will you have more than one entry point?",
  //if no
  "Enter the entry point"
  //if yes
  "Will the entries be in an array, or in an object?",
  //if object
  "Enter the property name"
  //if yes
  "Will this property have more than one entry point?",
  //if yes, repeat from 8
  "Enter an entry point for the array"
  //if array is selected
  "Do you have more properties to enter?",
  //for all questions after entry is provided
]

var outputQuestions = [
  //if single entry point
  //for output.filename
  "Do you want to specify an output filename? If not, output.path will default to bundle.js",
  //if yes
  "Please provide the output filename"
  //for output.path
  "Do you want to specify an output path? If not, output.path will default to __dirname",
  //if yes
  "Please provide the output path",
  //if multiple entry points, filename has to be in format '[name/hash/chunkhash].js'
  "Do you want to specify a public path?"
  //if yes
  "Please enter the public path"
]

var loaderQuestions = [
  "Do you need to add loaders?"
  //if yes
  "Do you know what loaders you need?"
  //if yes
  "Please enter loader name"
  //while !done
  "Do you have additional loaders to enter?"
  //build array of loaders

  //for each loader
  "Do you have a test for this loader?"
  //if yes
  "Enter the test condition as a RegEx or a string"

  "Do you want to exclude any directories, such as node_modules or bower_components?"
  //if yes
  "Please enter the directory to exclude"
  "Do you have additional directories to exclude?" //if yes, repeat from 59
  "Do you want to include any directories?"
  //if yes
  "Please enter the dirctory to include"
  "Do you have additional directories to include?"//if yes, repeat from 63

  //if reply to line 51 is no
  "Will you be using CSS in your project?"
  //if yes, create css loader w/test

  "Will you be using react in your project?"
  //if yes, create babel loader with correct presets and correct test syntax
]
