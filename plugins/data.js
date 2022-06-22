import Vue from "vue";

let defaultCopyright = [
  {
    type: 'txt',
    msg: 'Die Bilder wurden auf '
  },
  {
    type: 'href',
    href: 'https://pixabay.com',
    msg: 'pixabay.com'
  },
  {
    type: 'txt',
    msg: ' für Freie kommerzielle Nutzung freigegeben.'
  }
];
let animalCopyright = [
  {
    type: 'txt',
    msg: 'Die Bilder wurden auf '
  },
  {
    type: 'href',
    href: 'https://pixabay.com',
    msg: 'pixabay.com'
  },
  {
    type: 'txt',
    msg: ' für Freie kommerzielle Nutzung freigegeben. Der Text wurde von '
  },
  {
    type: 'href',
    href: 'https://www.wikipedia.org/',
    msg: 'wikipedia.org'
  },
  {
    type: 'txt',
    msg: ' genommen. '
  },
];

export default ({ app }, inject) => {
  inject(
    "datas",
    Vue.observable({
      logo: "/imgs/logo.png",
      menu: [
        {
          title: "Startseite",
          href: "/",
        },
        {
          title: "Tiere",
          href: "/animals",
        },
        {
          title: "Über",
          href: "/about",
        },
        {
          title: "Impressum",
          href: "/imprint",
        },
      ],
      page: {
        index: {
          title: ['Welcomme to','MyLittleZoo'],
          copyright: defaultCopyright
        },
        animals: {
          title: ['Unsere Tiere'],
          copyright: animalCopyright,
          list: require('~/assets/content/animals.js').array
        },
        about: {
          title: ['Über uns'],
          copyright: defaultCopyright,
          content: require('~/assets/content/about.js').array
        },
        imprint: {
          title: ['Impressum'],
          copyright: defaultCopyright,
          content: require('~/assets/content/imprint.js').array
        },
      },
      slider: {
        interval: 3500,
        pos: 0,
        cursor: {
          x: 0,
          y: 0
        },
        images: ['/imgs/gepard1.jpg','/imgs/gepard2.jpg', '/imgs/gepard3.jpg', '/imgs/gepard4.jpg']
      },
      images: {
        gepard: ['gepard1.jpg','gepard2.jpg', 'gepard3.jpg', 'gepard4.jpg'],
        karakal: ['karakal1.jpg', 'karakal2.jpg', 'karakal3.jpg', 'karakal4.jpg'],
        leopard: ['leopard1.jpg', 'leopard2.jpg', 'leopard3.jpg', 'leopard4.jpg'],
        lion: ['lion1.jpg', 'lion2.jpg', 'lion3.jpg', 'lion4.jpg'],
        serval: ['serval1.jpg', 'serval2.jpg', 'serval3.jpg', 'serval4.jpg'],
      },
      fun: {
        shuffle(array) {
          let currentIndex = array.length,  randomIndex;
  
          // While there remain elements to shuffle.
          while (currentIndex != 0) {
  
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
  
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
              array[randomIndex], array[currentIndex]];
          }
  
          return array
        },
        getCursorPos(event) {
          // clientX/Y gives the coordinates relative to the viewport in CSS pixels.
          // console.log(event.clientX);
          // console.log(event.clientY);

          // pageX/Y gives the coordinates relative to the <html> element in CSS pixels.
          // console.log(event.pageX);
          // console.log(event.pageY);

          // screenX/Y gives the coordinates relative to the screen in device pixels.
          // console.log(event.screenX);
          // console.log(event.screenY);

          return {
            x: event.pageX,
            y: event.pageY
          }
        },
        toast(obj, msg, duration=2000){
          obj.$buefy.snackbar.open({
            message: msg,
            queue: false,
            type: 'is-black',
            duration: duration
          })
        }
      }
    })
  );
};
