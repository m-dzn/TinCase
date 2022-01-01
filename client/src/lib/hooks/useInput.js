const { useState } = require("react");

function useInput(element, validator) {
    const [value, setValue] = useState(element);

    const onChange = (event) => {
        const { value } = event.target;

        let willUpdate = validator(value);
        if (willUpdate) {
            setValue(value);
        }
    };

    return { value, onChange };
}

export default useInput;
