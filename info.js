 // JavaScript code to handle form submission and table generation
 const form = document.getElementById('filter-form');
 const doctorTable = document.getElementById('doctor-table');
 const detailsModal = document.getElementById('details-modal');
 const appointmentModal = document.getElementById('appointment-modal');
 const doctorDetails = document.getElementById('doctor-details');
 const appointmentDetails = document.getElementById('appointment-details');
 const closeModalBtn = document.getElementById('close-modal');
 const closeAppointmentModalBtn = document.getElementById('close-appointment-modal');

 // Sample data (you can replace this with actual data)
 const doctorsData = [
     { name: 'Dr. Sandeep Birud', city: 'Pimpri Chinchwad', type: 'Dentist', 
       details: ['Education:MBBS','||','Experience:34+ years','||','Address:Dr.Bhiruds Sweet Smile Clinic,Pimpri Chinchwad','||',], 
       appointment:['Consultation Fee:500/-','||','Rating:4.7','||','Contact Number-2249398292108']},
     { name: 'Dr.Vinod Bharti', city: 'Kharadi', type: 'Gynecologist', 
       details: ['Education:DGO,DNB','||','Experience:21+ years','||','Address:Rising Medicare Hospital,Kharadi'], 
       appointment:['Consultation Fee:700/-','||','Rating:4.5','||','Contact Number-2071173262']},
     { name: 'Dr.Amit Kale', city: 'Aundh', type: 'Ophthalmologist', 
       details: ['Education:MBBS,MS','||','Address:Unity Hospital,Aundh'], 
       appointment:['Rating:4.6','||','Contact Number-7941057084']},
     { name: 'Dr. Dragpal Singh Rajput', city: 'Baner', type: 'Dentist', 
       details: ['Education:BDS,Cosmetic Dentist','||','Address:Flat No.602,6th Floor,Shovom Regency,Above Jyoti Gas Appliances,Baner,'], 
       appointment:['Consultation Fee:500/-','||','Rating:5','||','Availability:MON-SUN>08:00 AM-10:00 PM(Shift 1&2)']},
     { name: 'Dr. Preeti Kale', city: 'Kharadi', type: 'Gynecologist', 
       details: ['Education:MBBS, MS-Obstetrics & Gynaecology','||','Experience:23+ years','||','Address:Laxmi Building, Shivaji Chowk,Next to Kharadi Kshetriya Karyalaya,Aundh'], 
       appointment:['Consultation Fee:700/-','||','Rating:5','||','Availability:MON-SAT>10:00 AM-01:00 PM(Shift 1), THU>06:00 PM-08:00PM(Shift 2)']},
     { name: 'Dr. Renuka Vinod Nalawade', city: 'Kothrud', type: 'Dermatologist', 
       details: ['Education:MBBS, MD-Dermatology , Venereology & Leprosy','||','Experience:10+ years','||',
       'Address:Paud Road, Bhusari Colony, Landmark: Royal Enfield Showroom, Pune'], 
       appointment:['Consultation Fee:600/-','||','Rating:5','||','Availability:TUE-SAT>11:00 AM-12:30 PM(Shift 1&2), SUN>10:30 PM-11:30PM(Shift 2)']},
     { name: 'Dr. Sonal Lodha', city: 'Warje', type: 'Homoeopath', 
       details: ['Education:MD-Ayurveda Medicine, BAMS','||','Experience:17+ years','||','Address:Survey Number 134/9/1, Giridhar Nagar,Near Mumbai & Bangalore Highway,Warje'], 
       appointment:['Consultation Fee:300/-','||','Rating:4.5','||','Availability:MON-SUN>10:00 AM-09:00 PM(Shift 1&2)']},
     { name: 'Dr.Vinod Bharti', city: 'Moshi', type: 'Gynecologist', 
       details: ['Education:DGO,DNB','||','Experience:21+ years','||','Address:Rising Medicare Hospital,Kharadi'], 
       appointment:['Consultation Fee:700/-','||','Rating:4.5','||','Contact Number-2071173262']},
     
 ];


 form.addEventListener('submit', function (e) {
     e.preventDefault();
     const selectedCity = document.getElementById('city').value;
     const selectedDoctorType = document.getElementById('doctor-type').value;


     const filteredDoctors = doctorsData.filter(doctor =>
         doctor.city === selectedCity && doctor.type === selectedDoctorType
     );

   
     let tableHtml = '';
     for (const doctor of filteredDoctors) {
         tableHtml += `
             <tr>
                 <td>${doctor.name}</td>
                 <td><button class="btn" data-details="${doctor.details}">Details</button></td>
                 <td><button class="btn" data-appointment="${doctor.appointment}">Appointment</button></td>
             </tr>
         `;
     }
     doctorTable.querySelector('tbody').innerHTML = tableHtml;


     const detailsButtons = doctorTable.querySelectorAll('[data-details]');
     detailsButtons.forEach(button => {
         button.addEventListener('click', () => {
             const details = button.getAttribute('data-details');
             doctorDetails.textContent = details;
             detailsModal.style.display = 'block';
         });
     });

     // Show appointment modal
     const appointmentButtons = doctorTable.querySelectorAll('[data-appointment]');
     appointmentButtons.forEach(button => {
         button.addEventListener('click', () => {
             const appointment = button.getAttribute('data-appointment');
             appointmentDetails.textContent = appointment;
             appointmentModal.style.display = 'block';
         });
     });
 });

 closeModalBtn.addEventListener('click', () => {
     detailsModal.style.display = 'none';
 });

 closeAppointmentModalBtn.addEventListener('click', () => {
     appointmentModal.style.display = 'none';
 });