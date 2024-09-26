import React from "react";
import Link from "next/link";
import Image from "next/image";
function NavigationBar() {
    return (
        <nav>
            <Image
                src={"/flawlesslogo.png"}
                width={300}
                height={108}
                alt="Image logo for flawless"
            />
        </nav>
    );
}

export default NavigationBar;
