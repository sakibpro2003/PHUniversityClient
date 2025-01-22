import { useForm } from "react-hook-form";

const PHForm = ({onSubmit}) => {
    const {handleSubmit} = useForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>this is fomr</h2>
        </form>
    );
};

export default PHForm;