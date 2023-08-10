import { useState } from 'react';

const useToggle = ({
	initialState = false,
}: {
	initialState?: boolean;
}): { isActive: boolean; toggle: () => void } => {
	const [isActive, setIsActive] = useState<boolean>(initialState);
	const toggle = () => setIsActive((prev: boolean) => !prev);

	return {
		isActive,
		toggle,
	};
};
export default useToggle;
