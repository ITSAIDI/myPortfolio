
type ButtonInput = {
  handleClick : () => void,
  text : string,
  iconClassname ?: string, // Optional params
  textClassname ?: string,
  buttonClassname ?: string,

}

export default function Button(props : ButtonInput) {
  return (
     <button
            className={
            `
            group
            text-green1
            px-3 lg:py-1
            rounded-full
            hover:border-green2 
            transition-all duration-500 ease-in-out
            cursor-pointer 
            border-2 border-green1
            ${props.buttonClassname ?? ''}
            `
            }
            onClick={props.handleClick}
            >  
            <span
            className={`font-nunito font-extrabold lg:text-lg ${props.textClassname ?? ''}`}
            >
            {props.text} </span>
            <i className={`
              transition-transform duration-200 ease-in
              group-hover:scale-110 ${props.iconClassname ?? ''}`}></i>
        </button>
  )
}
