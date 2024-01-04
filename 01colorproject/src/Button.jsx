function Button({handleClick, color}){
    return(
        <button onClick={e => handleClick(color)} className={color}>{color}</button>
    )
}

export default Button;