import delay from './delay';

const sites = [{
  id: 0,
  name: "MR",
  errorDevices: 98,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis laoreet risus vel mollis. Donec scelerisque ac ex sit amet venenatis. In maximus arcu sapien. Fusce vel feugiat erat. Quisque varius nibh ex, ut dictum lacus ultricies et. Sed pulvinar odio eget suscipit cursus. Cras tempus arcu faucibus, pharetra elit nec, molestie est. Etiam auctor ipsum nec feugiat fringilla. Proin eget nulla ultrices diam viverra laoreet. Suspendisse potenti. Vivamus porta neque ipsum, a auctor nunc laoreet nec. Sed et dapibus elit."
}, {
  id: 1,
  name: "MT",
  errorDevices: 0,
  description: "Nunc id libero ac quam eleifend pulvinar in a turpis. Nunc lacinia pulvinar ultricies. Phasellus dignissim ut massa vitae tincidunt. Phasellus elementum velit accumsan massa sodales, non pretium nisl condimentum. Suspendisse vel posuere tortor, non dictum felis. Nulla posuere enim dui, sed laoreet libero viverra vitae. Quisque eu vulputate enim."
}, {
  id: 2,
  name: "ST",
  errorDevices: 8,
  description: "Curabitur tincidunt libero quis accumsan pretium. Vivamus ac tellus faucibus, faucibus sem sit amet, dictum ex. Etiam vestibulum, ligula in mattis varius, turpis turpis maximus sapien, id vulputate felis erat in erat. Duis urna ante, molestie vulputate commodo et, dictum a odio. Phasellus ut semper velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed at pretium libero."
}, {
  id: 3,
  name: "USCHI",
  errorDevices: 0,
  description: "Integer non arcu vel velit consectetur dictum. Pellentesque non urna vitae tortor blandit sodales vel non neque. Quisque tristique, dui et eleifend pretium, quam velit bibendum augue, in eleifend libero dolor at ante. Fusce metus lorem, faucibus sit amet condimentum vel, ornare lobortis lorem. In iaculis, dui facilisis congue consectetur, nunc dolor molestie odio, nec interdum risus ligula ac elit. Etiam sit amet tincidunt odio, sed efficitur enim. Nullam sed venenatis orci."
}, {
  id: 4,
  name: "USMSC",
  errorDevices: 28,
  description: "Suspendisse accumsan viverra ullamcorper. Mauris dolor ipsum, venenatis eu hendrerit at, convallis sit amet risus. Suspendisse accumsan nibh in convallis scelerisque. Aenean euismod quis nisi ut varius. Morbi semper dictum ligula vel dictum. Fusce ex tellus, venenatis eu arcu sit amet, faucibus faucibus orci. Integer finibus et erat eget rhoncus."
}, {
  id: 5,
  name: "USPRZ",
  errorDevices: 265,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis accumsan nibh. In posuere viverra vulputate. Cras eget tincidunt velit, id hendrerit felis. Aliquam erat volutpat. Aliquam erat volutpat. Nulla velit nulla, vestibulum id feugiat eu, ultrices vulputate enim. Maecenas nec accumsan urna, eget accumsan lacus. Sed orci mauris, malesuada vel sagittis ut, malesuada eu urna. Curabitur egestas suscipit nunc, id egestas arcu mattis sed."
}, {
  id: 6,
  name: "USQAS",
  errorDevices: 0,
  description: "Praesent iaculis porta lectus quis luctus. Nulla maximus velit leo, ut iaculis nibh ultrices eu. Vivamus a arcu ex. Maecenas semper diam ac ullamcorper egestas. Integer efficitur consequat malesuada. Sed scelerisque porttitor consequat. Maecenas tincidunt augue non dui pharetra pharetra. Morbi mollis lorem a augue semper, ut dignissim nisi vestibulum. Sed blandit viverra quam, ac convallis ipsum pretium eu. Duis pretium in arcu ut molestie. Nam congue augue eget scelerisque commodo. Nunc porta imperdiet ipsum sed mattis. Etiam vitae pretium tortor. Vivamus in ornare risus, non cursus urna. Aliquam non urna tristique, aliquam est vel, porttitor ex. Proin convallis sem magna, convallis elementum lacus venenatis eu."
}
];

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
