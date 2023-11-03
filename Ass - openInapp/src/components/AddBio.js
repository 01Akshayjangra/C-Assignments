import React, { useState } from 'react'
import './AddBio.css'

const AddBio = ({ toggleModal }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [youtube, setYoutube] = useState('');
    const [instagram, setInstagram] = useState('');

    const [showAlert, setShowAlert] = useState(false);
    const [activeFormStep, setActiveFormStep] = useState(1);

    const handleNext = () => {
        if (!name || !email || !phone) {
            alert('fill all the fields')
        } else {
            setActiveFormStep((prevStep) => prevStep + 1);
        }
    };

    const handlePrevious = () => {
        setActiveFormStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !phone) {
            setShowAlert(true);
            return;
        }
    };

    const hideAlert = () => {
        setShowAlert(false);
    };

    return (
        <>
            <div className="ab__main">
                <div className="ab__head">
                    <h2>
                        Add New Profile
                    </h2>
                    <span onClick={toggleModal}>
                        <img src="./assets/modal-cross.svg" alt="" />
                    </span>
                </div>
                <div className='ab__form'>
                    <div>
                        <div className='ab__form-steps'>
                            <div>
                                <p>Basic</p>
                                <span className={`ab__form-steps-ind ${activeFormStep === 1 && 'selected'}`}></span>
                            </div>
                            <div>
                                <p>Contact</p>
                                <span className={`ab__form-steps-ind ${activeFormStep === 2 && 'selected'}`}></span>
                            </div>
                        </div>
                        {activeFormStep === 1 &&
                            <>
                                <div className={`ab__form-group ${showAlert ? 'has-error' : ''}`}>
                                    <label htmlFor="name">Enter Name*</label>
                                    <input
                                        type="name"
                                        name="name"
                                        placeholder='Eg. John Doe'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className={`ab__form-group ${showAlert ? 'has-error' : ''}`}>
                                    <label htmlFor="email">Enter Email*</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder='Eg. John@xyz.com'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className={`ab__form-group ${showAlert ? 'has-error' : ''}`}>
                                    <label htmlFor="number">Enter Phone*</label>
                                    <input
                                        type="number"
                                        name="number"
                                        placeholder='Eg. 9235786683'
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                </div>
                            </>
                        }
                        {activeFormStep === 2 &&
                            <>
                                <div className={`ab__form-group ${showAlert ? 'has-error' : ''}`}>
                                    <label htmlFor="instagram">Instagram <span>(Optional)</span></label>
                                    <input
                                        name="instagram"
                                        placeholder='Eg. ..instagram.com/username'
                                        value={instagram}
                                        onChange={(e) => setInstagram(e.target.value)}
                                        required
                                    />

                                </div>
                                <div className={`ab__form-group ${showAlert ? 'has-error' : ''}`}>
                                    <label htmlFor="youtube">Youtube Link<span>(Optional)</span></label>
                                    <input
                                        name="youtube"
                                        placeholder='Eg. ..youtube/username'
                                        value={youtube}
                                        onChange={(e) => setYoutube(e.target.value)}
                                        required
                                    />
                                </div>
                            </>
                        }
                    </div>
                </div>
                <div className='ab__btm'>
                    {activeFormStep === 1 && <div className='ab__btm-next' onClick={handleNext}>
                        Next
                    </div>}
                    {activeFormStep === 2 && <div className='ab__btm-back' onClick={handlePrevious}>
                        Back
                    </div>}
                    {activeFormStep === 2 && <div className='ab__btm-next'>
                        Done
                    </div>}
                </div>
            </div>
        </>
    )
}

export default AddBio