import { ButtonProps } from "@/interfaces";

const Button:React.FC<ButtonProps> = (props) => {
    return (
        <div className="flex justify-center items-center ">
            <button className={`${props.styles} border-solid border-1 border-red-400`}>
                {props.title}
            </button>
        </div>
    )
};

export default Button;