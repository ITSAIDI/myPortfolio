type BadgeProps = {
    icon :any,
    title : string,
}

export default function Badge(props : BadgeProps) {
  return (
    <div className="border border-gray-600 w-fit rounded-full 
    px-3 py-0.5 text-gray-400 
    flex flex-row gap-1 items-center font-bold">
      <props.icon className="text-green1 text-xl"/>
      <h1>{props.title}</h1>
    </div>
  )
}
