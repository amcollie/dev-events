export interface EventItem {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

export const events: EventItem[] = [
    {
        title: "Next.js Conf 2026",
        image: "/images/event1.png",
        slug: "nextjs-conf-2026",
        location: "San Francisco, CA & Online",
        date: "October 24, 2026",
        time: "9:00 AM - 5:00 PM PST",
    },
    {
        title: "React Summit US 2026",
        image: "/images/event2.png",
        slug: "react-summit-us-2026",
        location: "New York, NY",
        date: "November 15, 2026",
        time: "9:30 AM - 6:00 PM EST",
    },
    {
        title: "ETHGlobal Hackathon",
        image: "/images/event3.png",
        slug: "ethglobal-hackathon-2026",
        location: "London, UK & Virtual",
        date: "December 4, 2026",
        time: "10:00 AM - 8:00 PM GMT",
    },
    {
        title: "JSWorld Conference 2026",
        image: "/images/event4.png",
        slug: "jsworld-conference-2026",
        location: "Amsterdam, Netherlands",
        date: "December 12, 2026",
        time: "9:00 AM - 5:30 PM CET",
    },
    {
        title: "KubeCon + CloudNativeCon",
        image: "/images/event5.png",
        slug: "kubecon-cloudnativecon-2026",
        location: "Salt Lake City, UT",
        date: "January 18, 2027",
        time: "8:30 AM - 5:00 PM MST",
    },
    {
        title: "AWS re:Invent 2026",
        image: "/images/event6.png",
        slug: "aws-reinvent-2026",
        location: "Las Vegas, NV",
        date: "December 1, 2026",
        time: "8:00 AM - 6:00 PM PST",
    },
];
