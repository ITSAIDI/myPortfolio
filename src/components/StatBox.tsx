import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer';

type StatBoxProps = {
  icon : any,
  text : string,
  value : number
}

export default function StatBox(props:StatBoxProps) {
   const { ref, inView } = useInView({
        triggerOnce: true,  // Animation triggers only once
        threshold: 1      // Trigger when 50% of the element is visible
    });
  return (
    <div ref= {ref} className="font-josefinsans flex flex-col gap-2 items-start
     text-white p-2 rounded-md 
     shadow-sm shadow-green1 w-fit h-fit">
      <div className='flex flex-row justify-center'>
        <props.icon className ="text-green1 text-3xl"/>
        {inView && <CountUp
          start={0}
          end={props.value}
          delay={1}
          duration={5}
          className="text-5xl font-semibold"
          >
        </CountUp> 
        }
      </div>

        <h2 className='text-[13px] font-bold'>{props.text}</h2>
    </div>
  )
}
