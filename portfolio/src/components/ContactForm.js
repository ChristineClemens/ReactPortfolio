// import React {Component} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// class EmailForm extends Component {
//   state = {
//     senderName: "",
//     senderEmail: "",
//     subjectLine: "",
//     messageBody: ""
//   };

//   handleInputChange = event => {
//     let value = event.target.value;
//     const name = event.target.name;

//     this.setState({
//       [name]: value
//     })
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (!this.state.senderName) {
//       alert("Please submit your name so that I can reach out to you!");
//     } else if (!this.state.senderEmail) {
//       alert("Please submit the email that you'd like me to contact you at!");
//     } else if (!this.state.subjectLine) {
//       alert("Please enter a subject line so that I may respond to your email more effectively!");
//     } else if (!this.state.messageBody) {
//       alert("Uh-oh! Your message content was empty, please include a few details to help me understand your inquiry!")
//     }
//     this.setState({
//       senderName: "",
//       senderEmail: "",
//       subjectLine: "",
//       messageBody: "",
//       fullEmail: `mailto:christineclemens.tesol@gmail.com?subject=${subjectLine}&body=${messageBody} + ${senderName} + ${senderEmail}` 
//     });
//   }

//   render() {
//     return (
//     <div className="row">       
//             <div className="col-lg-5 mb-lg-0 mb-4">
//                 <figure className="card">
//                     <article className="card-body">
//                         <figcaption className="form-header blue accent-1">
//                             <h3 className="mt-2 permanentMarkerFont tealText"><i className="fas fa-envelope"></i>Get in touch:</h3>
//                         </figcaption>
//                         <p className="dark-grey-text caveatFont">I'll get back to you as soon as I can!</p>
                        
//                         <section className="md-form">
//                             <i className="fas fa-user prefix grey-text"></i>
//                             <input type="text" name="senderName" onChange={this.handleInputChange} id="form-name" className="form-control" placeholder="First name Last name..." />
//                             <label for="form-name">Your name</label>
//                         </section>

//                         <section className="md-form">
//                             <i className="fas fa-envelope prefix grey-text"></i>
//                             <input type="text" name="senderEmail" onChange={this.handleInputChange} id="form-email" className="form-control" placeholder="MyEmail@gmail.com..." />
//                             <label for="form-email">Your email</label>
//                         </section>

//                         <section className="md-form">
//                             <i className="fas fa-tag prefix grey-text"></i>
//                             <input type="text" name="subjectLine" onChange={this.handleInputChange} id="form-subject" className="form-control" placeholder="Ex. Collaboration Inquiry..." />
//                             <label for="form-Subject">Subject</label>
//                         </section>

//                         <section className="md-form">
//                             <i className="fas fa-pencil-alt prefix grey-text"></i>
//                             <textarea id="form-text" name="messageBody" onChange={this.handleInputChange} className="form-control md-textarea" placeholder="Your detailed message..." rows="4"></textarea>
//                             <label for="form-text">Send message</label>
//                         </section>
//                         <section id="submitBtnDiv" className="text-center"></section>
//                     </article>
//                 </figure>
//             </div>
//             <a href="" id="submitBtn" class="btn btn-primary permanentMarkerFont a:hover" 
//                         style={{padding: '0 20px 0 20px', fontSize: '25px', backgroundColor: 'lightGray', border: '1px solid lightGray'}}>
//                         Submit
//             </a>
//           </div>
//         </div>
//     );
//   };

// export default EmailForm;