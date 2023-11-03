import { ExpertUser } from "./ExpertUser";

export interface Message {
    index: number;
    content: string;
    sender: 'AI' | 'User';
    loading?: boolean;
    // avatarUrl?: string;
    expertUsers?: ExpertUser[];
}