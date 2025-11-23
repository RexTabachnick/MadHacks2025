package com.hackathon.popopop;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/coupons")
@CrossOrigin(origins = "*") // IMPORTANT for mobile
public class CouponController {

    private Map<String, Coupon> coupons = new HashMap<>();

    public CouponController() {
        // dummy data
        Coupon c1 = new Coupon();
        c1.setStore("Starbucks");
        c1.setOffer("Free drink");
        c1.setExpires("2025-12-31");
        c1.setUsed(false);
        c1.setId(UUID.randomUUID().toString());
        coupons.put(c1.getId(), c1);

        Coupon c2 = new Coupon();
        c2.setStore("Target");
        c2.setOffer("20% off");
        c2.setExpires("2026-01-01");
        c2.setUsed(false);
        c2.setId(UUID.randomUUID().toString());
        coupons.put(c2.getId(), c2);
    }

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
