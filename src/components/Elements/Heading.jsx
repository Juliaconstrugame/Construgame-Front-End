export default function Heading({ children, level, customStyle }) 
{ 
    const headingIndex =
    { 
        'mini': 4, 
        'small': 3, 
        'medium': 2, 
        'large': 1
    }

    const headingStyle = 
    [
        'text-[24px] font-bold', //Large
        'text-[22px] font-bold', //Medium, 
        'text-[20px] font-bold', //Small 
        'text-[16px] font-semibold', //Mini 
    ]

    level = level || 'large'

    const Title = 'h' + headingIndex[level]

    if(level in headingIndex)
    { 
        return ( 
            <Title className={headingStyle[headingIndex[level] - 1] + ` ${customStyle}`}>
                { children }
            </Title> 
        )
    }

    return ''
}