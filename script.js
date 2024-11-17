document.getElementById("calculate-btn").addEventListener("click", function () {
    // Retrieve Input Values
    const productPrice = parseFloat(document.getElementById("product-price").value) || 0;
    const rtoCharges = parseFloat(document.getElementById("rto-charges").value) || 0;
    const sellingPrice = parseFloat(document.getElementById("selling-price").value) || 0;
    const expectedOrders = parseInt(document.getElementById("expected-orders").value) || 0;
    const confirmedOrdersPercent = parseFloat(document.getElementById("confirmed-orders").value) || 0;
    const expectedDeliveryPercent = parseFloat(document.getElementById("expected-delivery").value) || 0;
    const adSpends = parseFloat(document.getElementById("ad-spends").value) || 0;
    const miscCharges = parseFloat(document.getElementById("misc-charges").value) || 0;
  
    // Calculate Confirmed Orders
    const confirmedOrders = Math.floor((confirmedOrdersPercent / 100) * expectedOrders);
  
    // Calculate Delivered Orders
    const deliveredOrders = Math.floor((expectedDeliveryPercent / 100) * confirmedOrders);
  
    // Calculate RTO Orders
    const rtoOrders = confirmedOrders - deliveredOrders;
  
    // Calculate Cancelled Orders
    const cancelledOrders = expectedOrders - confirmedOrders;
  
    // Calculate Margin Per Order
    const marginPerOrder = sellingPrice - productPrice;
  
    // Calculate Total Earnings
    const totalEarnings = marginPerOrder * deliveredOrders;
  
    // Calculate Total Ad Spends
    const totalAdSpends = adSpends * expectedOrders;
  
    // Calculate Total RTO Charges
    const totalRtoCharges = rtoCharges * rtoOrders;
  
    // Calculate Total Spends
    const totalSpends = totalAdSpends + totalRtoCharges + miscCharges;
  
    // Calculate Net Profit
    const netProfit = totalEarnings - totalSpends;
  
    // Calculate Profit Per Order
    const profitPerOrder = deliveredOrders > 0 ? netProfit / expectedOrders : 0;
  
    // Update Results in the DOM
    document.getElementById("net-profit").textContent = `₹${netProfit.toFixed(2)}`;
    document.getElementById("profit-per-order").textContent = `₹${profitPerOrder.toFixed(2)}`;
  
    // Update Order Summary
    document.getElementById("total-orders").textContent = expectedOrders;
    document.getElementById("confirmed-orders-result").textContent = confirmedOrders;
    document.getElementById("delivered-orders").textContent = deliveredOrders;
    document.getElementById("rto-orders").textContent = rtoOrders;
    document.getElementById("cancelled-orders").textContent = cancelledOrders;
  
    // Update Earnings and Spends
    document.getElementById("margin-per-order").textContent = `₹${marginPerOrder.toFixed(2)}`;
    document.getElementById("total-earnings").textContent = `₹${totalEarnings.toFixed(2)}`;
    document.getElementById("total-ad-spends").textContent = `₹${totalAdSpends.toFixed(2)}`;
    document.getElementById("total-rto-charges").textContent = `₹${totalRtoCharges.toFixed(2)}`;
    document.getElementById("total-misc-charges").textContent = `₹${miscCharges.toFixed(2)}`;
    document.getElementById("total-spends").textContent = `₹${totalSpends.toFixed(2)}`;
  });