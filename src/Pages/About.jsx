import React from 'react'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <>
    
       {/* starting mai header component ka use karunga  */}
          {/* ye header about wala hoga   div kai under wala div center mai rakunga or text be....*/}
       <div className="h-75 w-full bg-blue-700 flex justify-center items-center">

           <div className='text-center max-w-2xl px-4 '>
                 <p className='text-2xl font-bold text-white mb-4'>about as </p>
                 <h1 className='text-5xl font-bold text-white mb-6 '>Transforming HealthCare One Appointment at A time  </h1>
                 <p className='text-lg text-white'>MediCare Was founded with simple version to make quality HealthCare 
                   Accessible to every one every ware we conntect  patients with vaild 
                  Doctor stremline entire HealthCare journey 

                 </p>
           </div>
          
       </div>

       {/* ab main content mai 4 div banaunga  ye raha mare pura logic  
         first-div:- two box  hoga first box mai info and seconds box mai image 
         seconds-div:-two box mai or our mission or our vission
         third div :some thing 
         four div :-  card team member  
       */}
<div className="h-130 w-full bg-gray-200  flex flex-row items-center justify-center gap-20 p-10">
  
  {/* First child div */}
     <div className="h-80 w-130 bg-white p-6 rounded-2xl  hover:scale-103 cursor-pointer">
        <p className="text-xl font-bold mb-2">OUR STORY</p>
           <h1 className="text-2xl font-semibold mb-3">Started from a Personal Experience</h1>
           <p className="mb-2">
                In 2020 our founder Dr. Suresh Patel experienced firsthand how difficult it was for his elderly mother 
                 to find a specialist during the pandemic. 
            </p>
        <p>
            MediCare was built to solve this exact problem — creating a seamless bridge between 
           patients and doctors. Today we serve over 50,000 patients and 500+ doctors across India.
    </p>
<br />
    <button className='bg-blue-400 rounded-3xl w-30 cursor-pointer'>view Doctor </button>
    
  </div>

  {/* Second child div */}
  <div className="h-80 w-120 bg-white flex justify-center items-center hover:scale-103 cursor-pointer rounded-lg">
    <img src="/src/assets/Hero_image.jpg" alt="Healthcare" className="h-full  rounded-lg shadow-lg w-full" />
  </div>

</div>

       {/* 3 div hoga mere  */}

            <div className='h-100 w-full bg-gray-300  flex flex-row items-center justify-center gap-20'>
              {/*first div over mission  */}

                 <div className='h-60 w-130 bg-white p-3 rounded-2xl  hover:scale-103 cursor-pointer'>
                       <img src="" alt="" />
                       <h1 className=' text-xl font-bold mb-2 '>OUR Mission </h1>
                       <p>TO Democratize access to quality HeathCare by connecting every patient 
                           regardless action with the right doctor at the right time thought technology that simle secure and Human -centeried 
                         </p>

                 </div>



                 {/*seconds div over vission  */}
                 <div className='h-60 w-130 bg-white p-6 rounded-2xl  hover:scale-103 cursor-pointer'>
                        <img src="" alt="" />
                       <h1 className=' text-xl font-bold mb-2 '>OUR Vision </h1>
                       <p> a world where no one delays medical due to lack of access informatiuon of affordability we envision a futute 
                        where AI assistent prevent care instant consultation and connected the health recorde are available to all  
                         </p>
                 </div>

              
              

            </div>

              {/*  third div  */}
            <div className='w-full h-60 bg-blue-400 flex flex-row items-center justify-evenly'>
                   <div>
                       <img src="" alt="" />
                       <h1>50000+ ..</h1>
                       <p>Paisent Served </p>
                   </div>
                   <div>
                       <img src="" alt="" />
                       <h1> 5100+</h1>
                       <p>Varified Doctor </p>
                   </div>
                   <div>
                      <img src="" alt="" />
                      <h1>20+</h1>
                      <p>Specialties</p>
                   </div>
                   <div>
                       <img src="" alt="" />
                       <h1>4.6/5</h1>
                       <p>Average Rating </p>
                   </div>

              </div>

              {/*  ab mere last div meet them member of founder  */}
          
     <div className='h-120 w-full bg-gray-300 '>
          <div className=' flex flex-col items-center justify-center p-10'>
              <h1 className='text-1xl font-bold text-blue-500 p-2'>  MEET THE TEAM Memeber </h1>
              <h1 className='text-2xl font-extrabold text-shadow-blue-200 p-2'>The Poeple Behind MediCare </h1>
          </div>
          {/*es div mai founder ka img or name dunga  */}
          <div className=' flex flex-row justify-center'>
               <div className='h-60 w-50 bg-gray-200 m-5 justify-items-center rounded-3xl cursor-pointer hover:scale-103'>
                   <img src="src\assets\avt1.jpg" alt="" className='h-35 w-30 pt-6 rounded-2xl'/>
                   <h1 className='m-1 p-1 font-bold'>Dr. Sunny kumar </h1>
                   <p>CEO & Co-Founder </p>
               </div>
               <div className='h-60 w-50 bg-gray-200 m-5 justify-items-center rounded-3xl cursor-pointer hover:scale-103'>
                   <img src="src\assets\avt2.jpg" alt="" className='h-35 w-30 pt-6 rounded '/>
                   <h1 className='m-1 p-1 font-bold'>Ananya Krishnan</h1>
                   <p>CTO</p>
               </div>
               <div className='h-60 w-50 bg-gray-200 m-5 justify-items-center rounded-3xl cursor-pointer hover:scale-103'>
                   <img src="src\assets\avt3.jpg" alt="" className='h-35 w-30 pt-6'/>
                   <h1 className='m-1 p-1 font-bold'>Dr Merra joshi </h1>
                   <p>Chief Medical Officer </p>
               </div>
               <div className='h-60 w-50 bg-gray-200 m-5 justify-items-center rounded-3xl cursor-pointer hover:scale-103'>
                   <img src="src\assets\avt4.jpg" alt="" className='h-35 w-30 pt-6' />
                   <h1  className='m-1 p-1 font-bold'>Puja pandit  </h1>
                   <p>Head of Product </p>
               </div>
          </div>
      
      </div> 
      <Footer/>      


    </>
  )
}

export default About
