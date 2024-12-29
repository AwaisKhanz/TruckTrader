
import { useState } from "react";

const ProfilePage = () => {


    const [isBusiness, setIsBusiness] = useState(false);
    const [accountType, setAccountType] = useState('');

    const handleAccountTypeChange = (event) => {
        setAccountType(event.target.value);
        if (event.target.value === 'business') {
            setIsBusiness(event.target.checked);
        } else {
            setIsBusiness(false); // Automatically hide business fields if Private is checked
        }
    };

    return (
        <section className="profile-page signup-page">

            <div className="signup-banner">
                <div className="content d-flex justify-content-center align-items-center">
                    <div className="container text-center">
                        <div className="signup-content">
                            <h1 className="txt-white">Profile </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="profile-img">
                    <img src="assets/images/contact-girl.png" className="card-img quality-img" alt="truck-img" />
                    <div className="profile-icon d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-camera txt-blue"></i>
                    </div>
                </div>
            </div>

            {/* Profile Form */}
            <div className="profile-form signup-form my-5 pt-5">
                <div className="container">
                    <form action="">
                        <div className="row">

                            {/* Form Header Stuff */}
                            <div className="col-md-12">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <h5>Account type</h5>
                                            </div>
                                            <div className="col-md-4 d-flex align-items-center">
                                                <input
                                                    type="radio"
                                                    id="private"
                                                    name="accountType"
                                                    value="private"
                                                    className="me-2 custom-checkbox"
                                                    checked={accountType === 'private'}
                                                    onChange={handleAccountTypeChange}
                                                />
                                                <label htmlFor="private">Private</label>
                                            </div>
                                            <div className="col-md-4 d-flex align-items-center">
                                                <input
                                                    type="radio"
                                                    id="business"
                                                    name="accountType"
                                                    value="business"
                                                    className="me-2 custom-checkbox"
                                                    checked={accountType === 'business'}
                                                    onChange={handleAccountTypeChange}
                                                />
                                                <label htmlFor="business">Business</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row align-items-center">
                                            <div className="col-md-2">
                                                <h5>Gender</h5>
                                            </div>
                                            <div className="col-md-3 d-flex align-items-center justify-content-center">
                                                <input type="checkbox" id="type2" name="accountType" value="type2" className="me-2 custom-checkbox" />
                                                <label for="type2">Male</label>
                                            </div>
                                            <div className="col-md-3 d-flex align-items-center justify-content-center">
                                                <input type="checkbox" id="type2" name="accountType" value="type2" className="me-2 custom-checkbox" />
                                                <label for="type2">Female</label>
                                            </div>
                                            <div className="col-md-3 d-flex align-items-center justify-content-center">
                                                <input type="checkbox" id="type2" name="accountType" value="type2" className="me-2 custom-checkbox" />
                                                <label for="type2">Other</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Form Header Stuff / */}

                            {/* Left Col */}
                            <div className="col-md-6 mt-5">
                                <div className="row">
                                    <div className="col-md-6 my-3">
                                        <label htmlFor="name" className="form-label py-2" >
                                            First Name
                                            <span className="required-sign /">*</span>
                                        </label>
                                        <input type="text" className="form-control py-3" id="name" value="John" required />
                                    </div>
                                    <div className="col-md-6 my-3">
                                        <label htmlFor="name" className="form-label py-2" >
                                            Surname
                                            <span className="required-sign /">*</span>
                                        </label>
                                        <input type="text" className="form-control py-3" id="name" value="Doe" required />
                                    </div>
                                    {/* Business Type Field */}

                                    {isBusiness && (
                                        <div className="col-md-12 business-fields">
                                            <label htmlFor="" className="form-label py-2">Subscription</label>
                                            <select className="form-control py-3">
                                                <option disabled>Select Subscription</option>
                                                <option>Subscription1</option>
                                                <option>Subscription2</option>
                                                <option>Subscription3</option>
                                            </select>
                                        </div>
                                    )}
                                    {/* Business Type Field / */}

                                    <div className="col-md-6 my-3">
                                        <label htmlFor="name" className="form-label py-2" >
                                            Zip Code
                                            <span className="required-sign /">*</span>
                                        </label>
                                        <input type="number" className="form-control py-3" id="name" value="0000" required />
                                    </div>
                                    <div className="col-md-6 my-3">
                                        <label htmlFor="name" className="form-label py-2" >
                                            Street Code
                                            <span className="required-sign /">*</span>
                                        </label>
                                        <input type="text" className="form-control py-3" id="name" value="00000" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label py-2" >
                                            Street
                                            <span className="required-sign /">*</span>
                                        </label>
                                        <input type="text" className="form-control py-3" id="name" value="UK,1234" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label py-2" >
                                            City
                                            <span className="required-sign /">*</span>
                                        </label>
                                        <input type="text" className="form-control py-3" id="name" value="London" required />
                                    </div>
                                    <div className="col-md-12 my-3">
                                        <label htmlFor="country" className="form-label py-2">
                                            Select Country
                                            <span className="required-sign">*</span>
                                        </label>
                                        <select className="form-control py-3" id="country" required>
                                            <option value="" disabled selected>Select a country</option>
                                            <option value="USA">USA</option>
                                            <option value="Canada">Canada</option>
                                            <option selected value="UK">UK</option>
                                            <option value="Australia">Australia</option>
                                            {/* <!-- Add more countries as needed --> */}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Left Col Ends */}

                            {/* Right Col */}
                            <div className="col-md-6 mt-5">
                                <div className="row">
                                    {isBusiness && (
                                        <div className="col-md-6 mt-3">
                                            <label htmlFor="company" className="form-label py-2" >
                                                Company
                                                <span className="required-sign /">*</span>
                                            </label>
                                            <input type="text" className="form-control py-3" id="company" value="Company" required />
                                        </div>
                                    )}

                                    {isBusiness && (
                                        <div className="col-md-6 mt-3">
                                            <label htmlFor="cocnum" className="form-label py-2" >
                                                CoC number
                                                <span className="required-sign /">*</span>
                                            </label>
                                            <input type="text" className="form-control py-3" id="cocnum" value="CoC number" required />
                                        </div>
                                    )}
                                    <div className="col-md-12 my-3">
                                        <label htmlFor="name" className="form-label py-2" >
                                            Addition
                                            <span className="required-sign /">*</span>
                                        </label>
                                        <input type="text" className="form-control py-3" id="name" value="Addition" required />
                                    </div>
                                    <div className="col-md-6 my-3">
                                        <label htmlFor="name" className="form-label py-2" >
                                            Phone Number
                                            <span className="required-sign /">*</span>
                                        </label>
                                        <input type="text" className="form-control py-3" id="name" value="0000000" required />
                                    </div>
                                    <div className="col-md-6 my-3">
                                        <label htmlFor="name" className="form-label py-2" >
                                            Alternative Phone Number
                                            <span className="required-sign /">*</span>
                                        </label>
                                        <input type="text" className="form-control py-3" id="name" value="0000000" required />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="name" className="form-label py-2" >
                                            Email Address
                                            <span className="required-sign /">*</span>
                                        </label>
                                        <input type="text" className="form-control py-3" id="name" value="email@example.com" required />
                                    </div>
                                    <div className="col-md-12 mt-3">
                                        <label htmlFor="name" className="form-label py-2" >
                                            Password
                                            <span className="required-sign /">*</span>
                                        </label>
                                        <input type="text" className="form-control py-3" id="name" required />
                                    </div>
                                </div>
                            </div>
                            {/* Right Col Ends */}
                            <div className="col-md-12 mt-3">
                                <button className="signup-btn">Save Changes</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* Profile Form / */}
        </section>
    )
};

export default ProfilePage;