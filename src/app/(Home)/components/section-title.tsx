import { ComponentProps } from "react";

const SectionTitle = ({children, ...props}: ComponentProps<"p">) => {
    return ( 
        <p className="font-bold pl-5 uppercase mb-3" {...props}>{children}</p>
    );
}
 
export default SectionTitle;