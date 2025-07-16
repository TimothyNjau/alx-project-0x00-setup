import { ButtonProps } from "@/interfaces";

const Button:React.FC<ButtonProps> = (props) => {
    return (
        <div >
            <button className={`${props.styles} border-solid border-1 border-red-400 p-1.5 text-xl`}>
                {props.title}
            </button>
        </div>
    )
};

export default Button;