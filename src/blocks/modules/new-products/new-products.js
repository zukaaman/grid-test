// modules.define('new-products', ['i-bem-dom'], function(provide, bemDom) {

// provide(bemDom.declBlock(this.name, {
//     onSetMod: {
//         js: {
//             inited: function() {

//             }
//         }
//     }
// }));

// });
import Glide from '@glidejs/glide'

var glide = new Glide('.new-products__slider', {
  type: 'carousel',
  perView: 3,
  focusAt: 'center',
  // breakpoints: {
  //   800: {
  //     perView: 2
  //   },
  //   480: {
  //     perView: 1
  //   }
  // }
})

glide.mount()
