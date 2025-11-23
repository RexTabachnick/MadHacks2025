package com.hackathon.popopop;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/coupons")
@CrossOrigin(origins = "*") // IMPORTANT for mobile
public class CouponController {

    private Map<String, Coupon> coupons = new HashMap<>();

    @PostMapping
    public Coupon addCoupon(@RequestBody Coupon coupon) {
        String id = UUID.randomUUID().toString();
        coupon.setId(id);
        coupons.put(id, coupon);
        return coupon;
    }

    @GetMapping
    public Collection<Coupon> getCoupons() {
        return coupons.values();
    }
}
