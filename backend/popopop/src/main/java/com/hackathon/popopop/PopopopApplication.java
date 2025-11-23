package com.hackathon.popopop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PopopopApplication {

	public static void main(String[] args) {
		//SpringApplication.run(PopopopApplication.class, args);
		var orderService = new OrderService();
		orderService.setPaymentService(new StripePaymentService());
		orderService.placeOrder();
	}

}
