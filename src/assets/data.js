import doc1 from "../assets/doctorsimg/doc1.jpg"
import doc2 from "../assets/doctorsimg/doc2.jpg"
import doc3 from "../assets/doctorsimg/doc3.jpg"
import doc4 from "../assets/doctorsimg/doc4.jpg"
import doc5 from "../assets/doctorsimg/doc5.jpg"
import doc6 from "../assets/doctorsimg/doc6.jpg"
import doc7 from "../assets/doctorsimg/doc7.jpg"
import doc8 from "../assets/doctorsimg/doc8.jpg"
import doc9 from "../assets/doctorsimg/doc9.jpg"
import doc10 from "../assets/doctorsimg/doc10.jpg"
import doc11 from "../assets/doctorsimg/doc11.jpg"
import doc12  from "../assets/doctorsimg/doc12.jpg"
import doc13  from "../assets/doctorsimg/doc13.jpg"
import doc14  from "../assets/doctorsimg/doc14.jpg"
import doc15  from "../assets/doctorsimg/doc15.jpg"

const doctors  = [{
  id: 1,
  name: "Dr. Idrish",
  specialty: "Cardiologist",
  image: doc1,
  rating: 4.9,
  reviews: 312,
  experience: "12 yrs exp",
  location: "Mumbai",
  fee: "₹800",
  available: "Available Today",
  about:
    "Experienced cardiologist with over 12 years of expertise in diagnosing and treating heart-related conditions. Dedicated to preventive cardiology, patient education, and delivering personalized treatment plans for long-term heart health."
},
{
  id: 2,
  name: "Dr. Anjali Mehta",
  specialty: "Neurologist",
  image: doc2,
  rating: 4.8,
  reviews: 198,
  experience: "9 yrs exp",
  location: "Delhi",
  fee: "₹1000",
  available: "Available Today",
  about:
    "Specialized neurologist focused on treating disorders of the brain, spine, and nervous system. Passionate about providing accurate diagnoses and evidence-based treatments for neurological conditions."
},
{
  id: 3,
  name: "Dr. Sunita Reddy",
  specialty: "Dermatologist",
  image: doc3,
  rating: 4.7,
  reviews: 245,
  experience: "7 yrs exp",
  location: "Bangalore",
  fee: "₹600",
  available: "Next Available: Tomorrow",
  about:
    "Experienced dermatologist offering comprehensive care for skin, hair, and nail conditions. Focuses on both medical and cosmetic dermatology with a patient-first approach."
},
{
  id: 4,
  name: "Dr. Rajesh Kumar",
  specialty: "Orthopedic",
  image: doc4,
  rating: 4.8,
  reviews: 287,
  experience: "14 yrs exp",
  location: "Hyderabad",
  fee: "₹900",
  available: "Available Today",
  about:
    "Orthopedic specialist experienced in treating bone, joint, and musculoskeletal disorders. Dedicated to helping patients regain mobility and improve quality of life."
},
{
  id: 5,
  name: "Dr. Neha Gupta",
  specialty: "Pediatrician",
  image: doc5,
  rating: 4.9,
  reviews: 401,
  experience: "10 yrs exp",
  location: "Pune",
  fee: "₹700",
  available: "Available Today",
  about:
    "Trusted pediatrician committed to providing compassionate healthcare for infants, children, and adolescents. Focused on preventive care and healthy child development."
},
{
  id: 6,
  name: "Dr. Vikram Singh",
  specialty: "ENT",
  image: doc6,
  rating: 4.7,
  reviews: 221,
  experience: "8 yrs exp",
  location: "Jaipur",
  fee: "₹650",
  available: "Available Today",
  about:
    "ENT specialist skilled in diagnosing and treating conditions related to the ear, nose, and throat. Provides personalized treatment plans for long-term relief."
},
{
  id: 7,
  name: "Dr. Pooja Sharma",
  specialty: "Gynecologist",
  image: doc7,
  rating: 4.9,
  reviews: 376,
  experience: "13 yrs exp",
  location: "Chennai",
  fee: "₹850",
  available: "Available Today",
  about:
    "Experienced gynecologist providing comprehensive women's healthcare services, including preventive care, pregnancy support, and reproductive health management."
},
{
  id: 8,
  name: "Dr. Aman Verma",
  specialty: "Psychiatrist",
  image: doc8,
  rating: 4.8,
  reviews: 194,
  experience: "11 yrs exp",
  location: "Lucknow",
  fee: "₹1200",
  available: "Next Available: Tomorrow",
  about:
    "Psychiatrist dedicated to improving mental health through evidence-based therapies, counseling, and personalized treatment strategies."
},
{
  id: 9,
  name: "Dr. Karan Malhotra",
  specialty: "Dentist",
  image: doc9,
  rating: 4.7,
  reviews: 259,
  experience: "9 yrs exp",
  location: "Ahmedabad",
  fee: "₹500",
  available: "Available Today",
  about:
    "Dental specialist providing preventive, restorative, and cosmetic dental care with a focus on patient comfort and oral health education."
},
{
  id: 10,
  name: "Dr. Sneha Joshi",
  specialty: "Ophthalmologist",
  image: doc10,
  rating: 4.9,
  reviews: 315,
  experience: "12 yrs exp",
  location: "Kolkata",
  fee: "₹950",
  available: "Available Today",
  about:
    "Eye care specialist experienced in diagnosing and treating a wide range of vision and eye health conditions using modern techniques."
},
{
  id: 11,
  name: "Dr. Rohit Arora",
  specialty: "Urologist",
  image: doc11,
  rating: 4.8,
  reviews: 233,
  experience: "10 yrs exp",
  location: "Noida",
  fee: "₹1100",
  available: "Available Today",
  about:
    "Urologist specializing in urinary tract and reproductive health conditions. Focused on providing effective and minimally invasive treatment options."
},
{
  id: 12,
  name: "Dr. Meera Nair",
  specialty: "Endocrinologist",
  image: doc12,
  rating: 4.9,
  reviews: 290,
  experience: "15 yrs exp",
  location: "Kochi",
  fee: "₹1000",
  available: "Available Today",
  about:
    "Endocrinologist with expertise in managing diabetes, thyroid disorders, and hormonal imbalances through comprehensive patient care."
},
{
  id: 13,
  name: "Dr. Arjun Patel",
  specialty: "Pulmonologist",
  image: doc13,
  rating: 4.8,
  reviews: 210,
  experience: "11 yrs exp",
  location: "Surat",
  fee: "₹900",
  available: "Next Available: Tomorrow",
  about:
    "Pulmonologist focused on respiratory health, providing advanced care for asthma, COPD, and other lung-related conditions."
},
{
  id: 14,
  name: "Dr. Kavita Rao",
  specialty: "Gastroenterologist",
  image: doc14,
  rating: 4.9,
  reviews: 341,
  experience: "14 yrs exp",
  location: "Visakhapatnam",
  fee: "₹950",
  available: "Available Today",
  about:
    "Gastroenterologist experienced in diagnosing and treating digestive system disorders with a patient-centered and evidence-based approach."
},
{
  id: 15,
  name: "Dr. Riya Kapoor",
  specialty: "Dermatologist",
  image: doc15,
  rating: 4.9,
  reviews: 332,
  experience: "11 yrs exp",
  location: "Chandigarh",
  fee: "₹750",
  available: "Available Today",
  about:
  "Experienced dermatologist specializing in the diagnosis, treatment, and prevention of skin, hair, and nail disorders. Expertise includes managing conditions such as acne, eczema, psoriasis, pigmentation issues, fungal infections, and hair loss. Dedicated to providing personalized treatment plans tailored to each patient's unique needs while utilizing the latest advancements in medical and cosmetic dermatology. Committed to promoting long-term skin health through preventive care, patient education, and evidence-based treatments. Known for a compassionate approach, attention to detail, and a focus on helping patients achieve healthy, confident skin through safe and effective dermatological care."
}]
export default doctors;
export {doc1 , doc2, doc3, doc4, doc5, doc6 , doc7 ,doc8 , doc9 , doc10 , doc11 , doc12 , doc13 , doc14 , doc15}
