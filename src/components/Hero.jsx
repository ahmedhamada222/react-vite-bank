import styles from "../style"
import { discount, robot } from "../assets"
import GetStared from "./GetStared"
const Hero = () =>  (
  <section id="home" className={`flex md:flex-row flex-col
   ${styles.paddingY }`}>
    <div className={`  flex-1 ${styles.flexStart}
     flex-col xl:px-0 sm:px-16 px-6 `}>
      <div className={` flex flex-row 
       items-center py-[6px] px-4
       bg-discount-gradient rounded-[10px] mb-2 `}>
          <img src={discount} alt="discount"
           className=" w-[32px] h-[32px]" />
           <p className={`${styles.paragraph} ml-2`}>
            <span className=" text-white ">20%
            </span> Discount For {""}
            <span className=" text-white "> 1 Monthe
            </span> Acount
           </p>
      </div>
      <div className=" flex flex-row  justify-between items-center 
        w-full">
        <h1 className="flex-1  font-poppins 
         font-semibold ss:text-[72px] text-[52px]
          text-white ss:leading-[100px] ss">
            The Next
          <br>
            </br>
          {""}
          <span className="text-gradient">
            Greneration</span><br></br>
            {''}
        </h1>
        <div className=" ss:flex hidden md:mr-4 mr-0">
          <GetStared/>
        </div>
      </div>
      <h1 className="font-poppins font-semibold
       ss:text-[68px] text-[52px] text-white
        ss:leading-[100px] leading-[75px] w-full">
          Payment Mothed.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni 
      laboriosam enim ad possimus aperiam? Voluptates
      corporis deleniti neque quia voluptatum</p>
    </div>
    <div className={` flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="billing" 
      className= " w-[100%] h-[100%] relative z-[5]"/>
      <div className=" absolute z-[0] w-[40%]
       h-[35%] top-0 pink__gradient">
      <div className=" absolute z-[1] w-[80%]
       h-[80%]  bottom-40 wite__gradient"/>
      <div className=" absolute z-[0] w-[50%]
       h-[50%] right-20 bottom-20 blue___gradient"/>

      </div>
      
    </div>
    <div className={` ss:hidden ${styles.flexCenter}`}>
      <GetStared/>
    </div>

  </section>
 )


export default Hero