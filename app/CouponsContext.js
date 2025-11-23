import { createContext, useContext, useState } from 'react';

const CouponsContext = createContext();

export const CouponsContextProvider = ({children}) => {
    const [coupons, setCoupons] = useState(0);

    return (
        <CouponsContext.Provider value={[coupons, setCoupons]}>
            {children}
        </CouponsContext.Provider>
    )
}

export const useCouponsContext = () => useContext(CouponsContext);
export { CouponsContext};