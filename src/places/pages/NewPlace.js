import React from 'react';

import Input from '../../shared/components/formElements/Input';
import './NewPlace.css';

const NewPlace = () => {
    return <form className="place-form">
        <Input type="text" label="Title" element="input" />
    </form>
};

export default NewPlace;