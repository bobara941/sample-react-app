import React from 'react';

import ComponentStepOne from './components/ComponentStepOne';
import ComponentStepTwo from './components/ComponentStepTwo';
import ComponentStepThree from './components/ComponentStepThree';

import './scss/styles.scss';

class App extends React.Component{

    state = {
        step: 1,
        firstName: '',
        surName: '',
        email: '',
        phone: '',
        gender: '',
        birthDay: {
            day: '',
            month: '',
            year:''
        },
        comment: ''
    }

    onClickNext = () => {
        this.setState(Object.assign({}, this.state, {step: this.state.step+1} ));
    }
    onClickFinish = () => {
        console.log(this.state);
        this.setState(Object.assign({}, this.state, {step: 1}));
    }
    onChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        const innerState = {};
        innerState[inputName] = inputValue;
        this.setState(Object.assign({}, this.state, innerState));
    }
    onChangeDate = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        const innerState = this.state;
        innerState.birthDay[inputName] = inputValue;
        this.setState(Object.assign({}, this.state, innerState));
    }
    render(){
        const  {
            step,
            firstName,
            surName,
            email,
            phone,  
            gender,
            birthDay,
            comment} = this.state;
        return (
            <div className="container">
                <div className="firstPart">
                    <ComponentStepOne 
                        isActive={step === 1}
                        onClickMethod={this.onClickNext}
                        onChange={this.onChange}
                        firstName={firstName}
                        surName={surName}
                        email={email}
                        />
                    
                    <ComponentStepTwo
                        isActive={step === 2}
                        onClickMethod={this.onClickNext}
                        onChangeDate={this.onChangeDate}
                        onChange={this.onChange}
                        phone={phone}
                        gender={gender}
                        birthDay={birthDay}/>
                    
                    <ComponentStepThree  
                        isActive={step === 3}
                        onClickMethod={this.onClickFinish}
                        onChange={this.onChange}
                        comment={comment}/>
                </div>
            </div>
        );
    }
}


export default App;