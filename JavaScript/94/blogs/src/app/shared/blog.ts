export interface Blog {
    id: number;
    name: string;
    website: string;
    company: string;
}

export interface BlogServerProps {
    id: number;
    name: string;
    website: string;
    company: {
        name: string;
    };
}
