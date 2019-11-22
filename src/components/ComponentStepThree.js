import React from 'react';
import ComponentHeader from './ComponentHeader';

const ComponentStepThree = ({isActive, onClickMethod, onChange, comment}) => {

    return (
        <section>
                <ComponentHeader text="Step 3: Final comments" />
                {
                    isActive === true && 
                    <div>
                        <textarea name="comment" onChange={onChange} value={comment}>
                        </textarea>
                        <br/>
                        <button className="btn" value="Next >" onClick={onClickMethod}>Next</button>
                    </div>
                }
        </section>
    )
}

export default ComponentStepThree;