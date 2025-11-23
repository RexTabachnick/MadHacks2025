package com.hackathon.popopop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class PopopopApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(PopopopApplication.class, args);
		var orderService = context.getBean(OrderService.class);
		orderService.placeOrder();
	}

}
