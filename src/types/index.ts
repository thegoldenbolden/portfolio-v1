import { Dispatch, SetStateAction } from "react";

export type AboutProps = { active: Project; setActive: Dispatch<SetStateAction<Project>> };
export type ListProps = AboutProps & { isMobile: boolean };

export type Project = {
 id: number;
 name: string;
 description: string;
 live?: string;
 github?: string;
};
