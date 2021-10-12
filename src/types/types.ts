export type Works = {
    web: WorkItem[],
    apps: WorkItem[],
    other: WorkItem[],
}

export type WorkItem = {
    id: string;
    name: string;
    imageUrl: string;
    imageAlt: string;
}

export type IsAllWorks = {
    web: boolean;
    apps: boolean;
    other: boolean;
}