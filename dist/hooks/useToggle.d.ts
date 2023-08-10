declare const useToggle: ({ initialState, }: {
    initialState?: boolean;
}) => {
    isActive: boolean;
    toggle: () => void;
};
export default useToggle;
