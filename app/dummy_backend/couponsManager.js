import coupons from './coupons.json';

export function getCoupons() {
    return coupons;
}

export function addCoupon(coupon) {
    const coupons_push = coupons.push(coupon);  
    try {
        fs.writeFileSync('coupons.json', JSON.stringify(coupons_push))
    } catch (error) {
        console.error("Failed to save coupon")
    }
}

export function removeCoupon(coupon) {
    coupons.splice(coupons.indexOf(coupon));  
    fs.writeFile('./coupons.json', JSON.stringify(coupons), (err) => {
        if (err) {
            console.error('Error writing JSON file:', err);
            return;
        }
        console.log('Data successfully written to users.json');
    });
}