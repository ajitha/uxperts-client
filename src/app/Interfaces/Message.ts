import { ExpertUser } from "./ExpertUser";

export interface Message {
    index: number;
    content: string;
    sender: 'AI' | 'User';
    avatarUrl?: string;
    expertUsers?: ExpertUser[];
}