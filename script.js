const url = "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";


      function getMenu() {
       
        fetch(url)
          .then(response => response.json())
          .then(data => {
            const menuDiv = document.getElementById('menu');
            const items = data.map(item => `<p>${item.name} - $${item.price}</p>`).join('');
            menuDiv.innerHTML = items;
          })
          .catch(error => console.error(error));
      }



      function takeOrder() {
        return new Promise(resolve => {
          setTimeout(() => {
            const burgers = ['Ice Cream - $3.99', 'Chocolate Cake - $5.49', 'Crepes - $5.99'];
            const order = burgers.sort(() => Math.random() - 0.5).slice(0, 3);
            const menuPlaced = document.getElementById('placed');
            menuPlaced.innerHTML = `Order placed: ${order.join(', ')}`;
            resolve(order);
          }, 2500);
        });
      }

      function orderPrep() {
        return new Promise(resolve => {
          setTimeout(() => {
            const menuPrep = document.getElementById('prep');
            menuPrep.innerHTML = `Order Prepared do the Payment`;
            resolve({ order_status: true, paid: false });
          }, 1500);
        });
      }

      function payOrder() {
        return new Promise(resolve => {
          const menuPay = document.getElementById('pay');
          menuPay.innerHTML = `Payment received Order Confirmed`;
          setTimeout(() => {
            resolve({ order_status: true, paid: true });
          }, 1000);
        });
      }

      function thankyouFnc() {
        alert('Thank you for eating with us today!');
      }

      async function placeOrder() {
        try {
          const order = await takeOrder();
          console.log(`Order placed: ${order.join(', ')}`);
          const orderStatus = await orderPrep();
          console.log('Order prepared:', orderStatus);
          const paymentStatus = await payOrder();
          console.log('Payment received:', paymentStatus);
          thankyouFnc();
        } catch (error) {
          console.error(error);
        }
      }
    