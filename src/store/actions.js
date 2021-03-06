import{
    ADD_COUNTER,
    ADD_TO_CART
  } from './mutations-types'
export default{
    addCart(context,payload){
     return new Promise((resolve,reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      //2.判断oldProduct
      if (oldProduct) {
      // oldProduct.count +=1
      context.commit(ADD_COUNTER,oldProduct)
      resolve('当前数量加一')
      } else {
        payload.count = 1
      // state.cartList.push(payload)
      context.commit(ADD_TO_CART,payload)
      resolve('加入成功')
      }
     })
    }
}