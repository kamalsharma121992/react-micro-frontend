import { faker } from '@faker-js/faker';

// let test = ''
// for (let i = 0;i<5;i++) {
//     test +=`this is number ${faker.internet.userName()} <br/>`
// }

// document.querySelector('#dev-product').innerHTML = test
// console.log(test)

const ProductModule = (el) =>{
    let test = ''
    for (let i = 0;i<5;i++) {
        test +=`this is number ${faker.internet.userName()} <br/>`
    }

    el.innerHTML = test
}
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#dev-product')
    if (devRoot) {
        ProductModule(devRoot)
    }
  }
  
export { ProductModule }