import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { socialList } from '../../constants/text';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ContactForm = () => {

    const [loading, setLoading] = React.useState(false);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = React.useState('success');

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        setLoading(true);
        emailjs
            // .sendForm('service_v33su0b', 'template_hzqyhfk', refForm.current, 'dlGGQb2d2yTvzRX7X')
            .then((result) => {
                setLoading(false);
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
                document.getElementsByName('from_name')[0].value = '';
                document.getElementsByName('from_email')[0].value = '';
                document.getElementsByName('message')[0].value = '';
            })
            .catch((error) => {
                setLoading(false);
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
                document.getElementsByName('from_name')[0].value = '';
                document.getElementsByName('from_email')[0].value = '';
                document.getElementsByName('message')[0].value = '';
            });
    };

    return (
            <div className='flex justify-center m-12'>
            <form className='flex flex-col gap-8 sm:w-[450px] w-[320px] bg-[#a3abbf80]  rounded-[1rem] p-5 relative overflow-hidden' ref={refForm} onSubmit={sendEmail}>
                <div className="flex md:gap-4 md:flex-row flex-col gap-8 justify-between">
                    <div className="flex flex-col items-start gap-3">
                        <label htmlFor="fullName" className="text-black text-[0.9rem]  whitespace-nowrap">Full Name</label>
                        <input
                            type="text"
                            className="border border-[#505362] rounded-[0.5rem] w-full md:p-2 p-3 bg-[#61697e80] text-white focus:ring-0"
                            id="fullName"
                            placeholder="John Doe"
                            name='from_name'
                            required
                        />
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <label htmlFor="email" className="text-black text-[0.9rem] whitespace-nowrap">Email address</label>
                        <input
                            type="email"
                            className="border border-[#505362] rounded-[0.5rem] w-full md:p-2 p-3 bg-[#61697e80] text-white focus:ring-0"
                            id="email"
                            placeholder="xyz@gmail.com"
                            name='from_email'
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start gap-3">
                    <label htmlFor="message" className="text-black text-[0.9rem]">Message</label>
                    <textarea
                        placeholder="Message"
                        name='message'
                        className='rounded-lg bg-[#61697e80] text-white w-full p-3 border border-[#505362] focus:ring-0'
                        id='message'
                        required
                    ></textarea>
                </div>
                <button type="submit" className={`${loading ? 'disabled' : 'border rounded-[0.5rem] sm:px-[3rem] sm:py-[0.5rem] py-[0.7rem] bg-[#153b56ac] text-white hover:bg-[#4360d0] transition-all w-full'}`}>
                    {loading ? "Sending" : 'Send message'}
                </button>
               
            </form>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarSeverity === 'success' ? 'Form Submitted Successfully!' : 'Form Submission Failed!'}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default ContactForm