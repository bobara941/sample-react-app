import React from 'react';
import ComponentHeader from './ComponentHeader';

const ComponentStepOne = ({isActive, onClickMethod,onChange, firstName, surName, email}) => {

    return (
        <section>
                <ComponentHeader text="Step 1: Your details" />
                {
                    isActive === true && 
                    <div>
                        <label className="fir">First Name</label>
                        <br/>
                        <input type='text' className="firstName" value={firstName} name="firstName" onChange={onChange}/>
                        <br/>
                        <label className="sur">Surname</label>
                        <br/>
                        <input type='text' className="lastName" value={surName} name="surName" onChange={onChange}/>
                        <br/>
                        <label className="email">Email Address:</label>
                        <br/>
                        <input type='email' value={email} className="emi" name="email" onChange={onChange}/>
                        <br/>
                        <input className="btn" type="button" value="Next >" onClick={onClickMethod}/>
                    </div>
                }
        </section>
    )
}

export default ComponentStepOne;