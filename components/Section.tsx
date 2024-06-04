import React from 'react'

interface SectionProps {
    className: string;
    id: string;
    children: any;
}

const Section = ({ className, id, children }: SectionProps) => {
  return (
    <div className={className} id={id}>
        {children}
    </div>
  )
}

export default Section