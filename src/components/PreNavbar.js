import React from 'react'
import "../styles/PreNavbar.css"


const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7 22.1q-.825 0-1.412-.587Q5 20.925 5 20.1q0-.825.588-1.412Q6.175 18.1 7 18.1t1.412.588Q9 19.275 9 20.1t-.588 1.413Q7.825 22.1 7 22.1Zm10 0q-.825 0-1.412-.587Q15 20.925 15 20.1q0-.825.588-1.412.587-.588 1.412-.588t1.413.588Q19 19.275 19 20.1t-.587 1.413q-.588.587-1.413.587ZM6.3 6.1l2.25 4.725h7L18.125 6.1ZM5.25 3.9h14.525q.675 0 1.037.612.363.613.038 1.213L17.425 11.9q-.275.525-.762.812Q16.175 13 15.6 13H8.2l-1.05 1.9H19.1v2.2H7q-1.2 0-1.8-1.038-.6-1.037-.025-2.062L6.5 11.6 2.95 4.1H.9V1.9h3.4Zm3.3 6.925h7Z"/></svg>

function PreNavbar() {
  return (
    <div className="preNav">
    <div>
        <a  href="https://www.mi.com/in/">MI INDIA</a> <span>|</span>
        <a  href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a> <span>|</span>
        <a  href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a> <span>|</span>
        <a  href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE ﹀</a>
    </div>
    <div>
    <a  href="https://store.mi.com/in/site/login">SIGN IN</a> <span>|</span>
        <a  href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP</a> <span>|</span>
        <a  href="https://store.mi.com/in/site/login"> {cartIcon} <span> CART (0)</span></a>
     
    </div>
   
</div>
  )
}

export default PreNavbar
