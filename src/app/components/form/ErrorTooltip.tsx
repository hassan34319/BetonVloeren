'use client'

import React from 'react'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '../ui/tooltip'

type ErrorTooltipProps = {
    label: string
    children: React.ReactNode
    side?: "top" | "left" | "right" | "bottom"
    align?: "start" | "center" | "end"
    open: boolean
}  

const ErrorTooltip = ({label, children, side='top', align='center', open}: ErrorTooltipProps) => {

    console.log(open)
  return (
    <TooltipProvider>
        <Tooltip delayDuration={50} open={open}>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent side={side} align={align} className='text-[#fe7e7f] mb-1' >
                <p className='text-sm normal-case'>{label?.toLowerCase()}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}

export default ErrorTooltip