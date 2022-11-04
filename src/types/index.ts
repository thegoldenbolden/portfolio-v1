import { Dispatch, SetStateAction } from "react";

export type ContentProps = { content: Project; setContent: Dispatch<SetStateAction<Project>> };
export type ShowcaseProps = ContentProps & { isMobile: boolean };
export type Project = {
 id: number;
 name: string;
 description: string;
 site?: string;
 github?: string;
};
