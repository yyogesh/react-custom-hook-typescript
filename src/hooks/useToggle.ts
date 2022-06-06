import { useState } from "react";

const useToggle = (defaultValue: boolean) => {
    const [value, setValue] = useState(defaultValue);

    const toggleValue = (val: boolean) => {
        setValue((currentValue) => typeof val === "boolean" ? val : !currentValue);
    }
    return [value, toggleValue];
}

export default useToggle