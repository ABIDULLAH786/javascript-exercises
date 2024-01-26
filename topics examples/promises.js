// let the cart is real application data
const cartInfo = [
    {
        id: 1,
        name: "T-Shirt",
        price: 19.99,
        quantity: 2
    },
    {
        id: 2,
        name: "Coffee Mug",
        price: 9.99,
        quantity: 1
    },
    {
        id: 3,
        name: "Laptop Case",
        price: 34.99,
        quantity: 1
    }
];
console.log("Order Process Start")
processOrder(cartInfo)
    .then(orderInfo => {
        return orderInfo;
    })
    .then(order => {
        return proceedToPayment(order)
    }).catch(err => console.log(err)) // to catch the above two promises error so that the rest of the flow goes on.
    .then(paymentInfo => {
        console.log(paymentInfo.status)
        return showOrderSummary(paymentInfo)
    }).then(summary => console.log("Final Order Summary: ", summary))
    .catch(err => console.log(err))

// Producer Work
function processOrder(data) {
    let isValid = true; // suppose that the card check is doen before creating order
    let promise = new Promise((resolve, reject) => {
        if (isValid) {
            // suppose we made the db_query here
            // adding some delay to add feeling of real API with some delay in response
            setTimeout(() => {
                try {
                    // Calculate total price
                    const totalPrice = data.reduce((total, item) => total + item.price * item.quantity, 0);

                    const orderInfo = {
                        id: 42,
                        status: "pending",
                        totalPrice: totalPrice,
                        cartInfo: data
                    };

                    resolve(orderInfo);
                } catch (error) {
                    reject(error);
                }
            }, 2000);
        } else {
            reject("Invalid Card")
        }
    })

    return promise;
}

function proceedToPayment(order) {
    // suppose everything goes well 
    return new Promise((resolve, reject) => {
        order.status = `Payment of ${order.totalPrice} successful`
        resolve(order)
    })
}

function showOrderSummary(orderDetails) {
    return new Promise((resolve, reject) => {
        let summary = orderDetails.cartInfo.reduce((acc, curr) => {
            let { name, price, quantity } = curr
            acc.push({ name, price, quantity, total: curr.price * curr.quantity, overallTotal: orderDetails.totalPrice })
            console.log(acc)
            return acc
        }, [])

        if (summary) {
            resolve(summary)
        } else {
            reject(new Error("Summary not found"))
        }
    })
}