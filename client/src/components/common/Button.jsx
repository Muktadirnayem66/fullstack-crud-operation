import PropTypes from "prop-types";

const Button = ({label, handleData}) => {
    return (
        <button onClick={handleData} className="bg-blue-500  hover:bg-blue-700 text-white font-bold mt-3 py-3 px-10 rounded">
            {label}
</button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    handleData:PropTypes.func.isRequired
}

export default Button;