const { useState } = require('react');

const useToggle = (initialState = false) => {
	const [isActive, setIsActive] = useState(initialState);
	const toggle = () => setIsActive((prev) => !prev);
	return {
		isActive,
		toggle,
	};
};
export default useToggle;
