// the breakpoints are setup in variables.scss
const detectIfMobile = () => window.innerWidth <= 769;

const detectDevice = () => navigator.userAgent.match(/android/i) || navigator.userAgent.match(/iPhone/i);


export default {
    detectIfMobile,
    detectDevice
};
