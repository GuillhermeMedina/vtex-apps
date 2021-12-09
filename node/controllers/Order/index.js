import OrderRepository from '../../repositories/OrdersRepository'

class Order {
  index(request, response ) {
    const idOrder = request.params.id

    const infoOrder = OrderRepository.findById(idOrder)

    return response.infoOrder
  }


}

module.exports = new Order()
