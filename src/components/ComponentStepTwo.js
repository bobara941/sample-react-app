import React from 'react';
import ComponentHeader from './ComponentHeader';

const ComponentStepTwo = ({isActive, onClickMethod, phone, gender, birthDay, onChange, onChangeDate}) => {

    const genderOptions = [
        {label: 'Male', value: 'm'},
        {label: 'Female', value: 'f'},
        {label: 'Other', value: 'o'},
    ]


    return (
        <section>
                <ComponentHeader text="Step 2: More comments" />
                {
                    isActive === true && 
                    <div class="sec">
                        <label className="phone">Telephone Number</label>
                        <br/>
                        <input type='text' className="phoneNumber" value={phone} name="phone" onChange={onChange}/>
                        <br/>
                        <label className="gender">Gender</label>
                        <br/>


                        <select name='gender' className="gen" onChange={onChange} value={gender}>
                            <option value=''>Select</option>
                            {
                                genderOptions.map((op, key) =>  {
                                    return <option key={key} value={op.value}>{op.label}</option>
                                })
                            }
                        </select>

                        <br/>
                        <label className="birthDate">Birth Date</label>
                        <br/>
                        <input type='text' value={birthDay.day} name="day" onChange={onChangeDate}/>
                        <input type='text' value={birthDay.month} name="month"onChange={onChangeDate}/>
                        <input type='text' value={birthDay.year} name="year" onChange={onChangeDate}/>
                        <br/>
                        <input className="btn" type="button" value="Next >" onClick={onClickMethod}/>
                    </div>
                }
        </section>
    )
}

export default ComponentStepTwo;