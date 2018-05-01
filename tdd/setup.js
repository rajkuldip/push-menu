import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import requireHacker from "require-hacker";

configure({ adapter: new Adapter() });
var jsdom = require("jsdom");
const { JSDOM } = jsdom;

var exposedProperties = ["window", "navigator", "document"];

const { document } = (new JSDOM("")).window;
global.document = document;

Object.keys(document.defaultView).forEach((property) => {

  if (typeof global[property] === "undefined") {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
    userAgent: "node.js",
    platform: "windows", 
    appName: "Microsoft Internet Explorer", 
};

global.Blob = class Blob{};
global.window.URL.createObjectURL = () => {};
global.window.URL.revokeObjectURL = () => {};

global.fetch = require("node-fetch");
global.envConfig = {
  API_URL: "API here"
};


// =============== Ignore files
const extensions = ["css", "gif", "jpg", "png", "svg", "mp3"];

extensions.forEach(type => {
  requireHacker.hook(type, () => "module.exports = ''");
});
