package com.hackathon.popopop;

public class OrderService {

    private PaymentService paymentService;

    // public OrderService(PaymentService paymentService)
    // {
    //     this.paymentService = paymentService;
    // }

    public void setPaymentService(PaymentService paymentService)
    {
        this.paymentService = paymentService;
    }

    public void placeOrder() {
        paymentService.processPayment(10);
    }
}
