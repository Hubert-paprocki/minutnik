interface ButtonProps {
	children: React.ReactNode;
	start?: boolean;
	stop?: boolean;
	reset?: boolean;
	onClick?: () => void;
}

function Button({ children, start, stop, onClick, reset }: ButtonProps) {
	
	let classes = "py-2 px-5 rounded-md text-xl shadow hover:scale-105 hover:shadow-lg duration-100 active:shadow active:translate-y-[2.5px] ";
	if (start) {
		classes += ` bg-green-300 hover:bg-green-400`;
	} else if (reset) {
		classes += ` bg-red-300 hover:bg-red-400`;
	} else if (stop) {
		classes += ` bg-orange-300 hover:bg-orange-400`;
	}
	return (
		<button onClick={onClick} className={classes}>
			{children}
		</button>
	);
}

export default Button;
