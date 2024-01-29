import '../src/contact.css'
export default function Contact() {
     return (
     <>
     <p>Contact</p>
     <form id="ffp">
		
			
				<label htmlFor="myFName"> *First Name: </label>
				<input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />
				
				<label htmlFor="myLName"> *Last Name: </label>
				<input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />
				<label htmlFor="myContact"> *Contact Number: </label>
				<input type="text" id="myContact" name="myContact" required="required" /> <br /> <br />
				
				<label htmlFor="myEmail"> *Email: </label>
				<input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />
                    <label htmlFor="myMessage"> *Message: </label>
				<textarea type="message" id="myMessage" name="myMessage" rows="6" required="required" /> <br /> <br />
				
				      
            <a class="btn" href="/" role="button">Submit</a>
            
	
		
		</form> <br></br>
          <p><i>Call me on: <strong>652.575.4140 </strong></i></p>
 <p>facebook:www.shabreen.facebook.com</p>
 <p>email:shabreen.jahan@yahoo.com</p>
     </>
     );
     }
    