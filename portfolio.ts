import { worksSectionType } from "./app/lib/definitions";

export const myWorks: worksSectionType[] = [
    {
        tags: [{tagName: "Design System", bgColor: "#d9deee", color: "#6878ac"},],
        label: ["Schoolworkspro", "Design Systems: One", "Component at A", "Time"],
        year: "2024",
        logo: "/img/works/swp.png",
        button: {label: "Read Case Study", bgColor: "#1276c1", link: "/works/schoolworkspro", isActive: true,},
        bgColor: "#EDF0F9"
    },
    {
        tags: [{tagName: "UX Design", bgColor: "#dfdfdf", color: "#525665"}, {tagName: "Interface Design", bgColor: "#dfdfdf", color: "#525665"}],
        label: ["Effortless", "eDiscovery and", "Case Management", "with CaseConnect"],
        year: "2022-23",
        logo: "/img/works/ediscovery.png",
        button: {label: "Read Case Study", bgColor: "#1276c1", link: "/works/caseconnect", isActive: true,},
        bgColor: "#eaeaea"
    },
    {
        tags: [{tagName: "Product Design", bgColor: "#d9deee", color: "#6878ac"},],
        label: ["Unicampus Global"],
        year: "2024-25",
        logo: "/img/works/unicampus.png",
        button: {label: "Under-Construction", bgColor: "#babfc3", link: "/", isActive: false,},
        bgColor: "#EDF0F9"
    },
    {
        tags: [{tagName: "User Research", bgColor: "#d9deee", color: "#6878ac"},],
        label: ["Improving Virtual", "Reality Experience for", "Elderly with Dementia"],
        year: "2021",
        logo: "/img/works/vr.png",
        button: {label: "Read Case Study", bgColor: "#1276c1", link: "/works/vr", isActive: true,},
        bgColor: "#eaeaea"
    },
    {
        tags: [{tagName: "Interface Design", bgColor: "#dfdfdf", color: "#525665"}],
        label: ["Landing Page", "Design Showcase"],
        year: "2022-24",
        logo: "/img/works/landing.png",
        button: {label: "Browse Designs", bgColor: "#1276c1", link: "/works/landing", isActive: true,},
        bgColor: "#EDF0F9"
    },
]