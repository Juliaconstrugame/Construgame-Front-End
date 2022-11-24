export default function Content({ children, full }) 
{ 
    if(full)
    { 
        return (
            <main>{ children }</main>
        )
    }
    else
    { 
        return ( 
            <main className="container px-6 ">
                <div className="layout grid">
                    { children }
                </div>
            </main>
        )
    }
}