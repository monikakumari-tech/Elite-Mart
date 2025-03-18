import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div className=" mt-30 mb-10 text-gray-500">
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 pb-10">
<div className="">
    <img className="w-20 h-10 " src={assets.mujlogo} alt="image" />
    <p className="pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tenetur placeat quidem?</p>
</div>
<div>
      <p className="text-2xl pb-5 text-black">Company</p>
    <ul>
       
        <li>Home</li>
        <li>About</li>
        <li>Delivery</li>
        <li>Privacy Policy</li>
    </ul>
</div>
<div>
<p className="text-2xl pb-5 text-black">Get In Touch</p>
    <ul>
        <li>+91- 3242657433377</li>
        <li>Carrer@mju.com</li>
    </ul>
</div>
    </div>
    <hr />
    <p className="pt-10 text-center text-black">copyright 2025@ muj.com - All Right Reserved</p>
    </div>
  )
}
export default Footer