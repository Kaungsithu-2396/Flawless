import React from "react";

export default function IFrameComponent() {
    return (
        <div className="">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4097.964995166971!2d100.5170904753323!3d13.72403288666495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298d01a157e59%3A0x59355caff67f723a!2sT%20R%20Building!5e1!3m2!1sen!2sth!4v1728031129849!5m2!1sen!2sth"
                width="100%"
                height="100%"
                className=" w-[300px] lg:w-[80%] md:w-[70%] xl:w-[100%] xl:h-[300px] rounded-md m-auto "
                style={{ border: "none" }}
                loading="lazy"
            />
        </div>
    );
}
