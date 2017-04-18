import delay from './delay';

const sites = [{
  id: 0,
  name: "MR",
  errorDevices: 98
}, {
  id: 1,
  name: "MT",
  errorDevices: 0
}, {
  id: 2,
  name: "ST",
  errorDevices: 8
}, {
  id: 3,
  name: "USCHI",
  errorDevices: 0
}, {
  id: 4,
  name: "USMSC",
  errorDevices: 28
}, {
  id: 5,
  name: "USPRZ",
  errorDevices: 265
}, {
  id: 6,
  name: "USQAS",
  errorDevices: 0
}];

class HTabSitesApi {
  static getAllSitess() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], sites));
      }, delay);
    });
  }

}

export default HTabSitesApi;
