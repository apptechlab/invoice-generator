import { useMemo } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Assets
import Logo from "@/public/assets/img/invoice.svg";

// ShadCn
import { Card } from "@/components/ui/card";

// Components
import { DevDebug, LanguageSelector, ThemeSwitcher } from "@/app/components";

const BaseNavbar = () => {
    const devEnv = useMemo(() => {
        return process.env.NODE_ENV === "development";
    }, []);

    return (
        <header className="lg:container z-[99]">
            <nav>
                <Card className="flex flex-wrap justify-between items-center gap-5 px-4 py-4">
                    <Link href={"/"}>
                        <Image
                            src={Logo}
                            alt="Invoify Logo"
                            width={90}
                            height={90}
                            loading="eager"
                        />
                    </Link>
                    <ThemeSwitcher />
                </Card>
            </nav>
        </header>
    );
};

export default BaseNavbar;
