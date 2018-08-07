function generateBar() {
    let espressoOrders = 0
    let capuccinoOrders = 0
    const makeEspresso = () => { espressoOrders++; return {beverage:'Espresso'}}
    const makeCapuccino = () => {capuccinoOrders++; return { beverage: 'Capuccino' }}
    const orderEspresso = () => makeEspresso()
    const orderCapuccino = () => makeCapuccino()
    const sales = () => { return (espressoOrders * 1) + (capuccinoOrders*2)}

    return {
        orderEspresso,
        orderCapuccino,
        sales
    }
}

const bar = generateBar()

    // (function () {
    //     let espressoOrders = 0
    //     let capuccinoOrders = 0
    //     const makeEspresso = () => { espressoOrders++; return { beverage: 'Espresso' } }
    //     const makeCapuccino = () => { capuccinoOrders++; return { beverage: 'Capuccino' } }
    //     const orderEspresso = () => makeEspresso()
    //     const orderCapuccino = () => makeCapuccino()
    //     const sales = () => { return (espressoOrders * 1) + (capuccinoOrders * 2) }

    //     module.exports = {
    //         orderEspresso,
    //         orderCapuccino,
    //         sales
    //     }

    //     return module.exports
    // })()