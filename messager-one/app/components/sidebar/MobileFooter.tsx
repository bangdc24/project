'use client';

import useConversation from "@/app/hooks/useConversation";
import useRouter from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";

const MobileFooter = () => {
    const router = useRouter();
    const {isOpen} = useConversation();

    if (isOpen) {
        return null;
    };

    return (
        <div className="fixed 
            justify-between 
            w-full 
            bottom-0 
            z-40 
            flex 
            items-center 
            bg-white 
            border-t-[1px] 
            lg:hidden"
        >
            {router.map((router) => (
                <MobileItem 
                    key={router.href}
                    href={router.href}
                    active={router.active}
                    icon={router.icon}
                    onClick={router.onClick}
                />
            ))}
        </div>
    )
}

export default MobileFooter;