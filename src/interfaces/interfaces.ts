export interface SignInDialogProps {
    open: boolean;
    onSignIn: (provider: "spotify" | "apple" | "youtube") => void;
    onContinueAsGuest?: () => void;
}

type Role = "system" | "user" | "assistant";

export interface MessageBubbleProps {
    role: Role;
    content: string;
}

export interface CardContentProps {
    title: string;
    description: string;
    icon: React.ReactNode; 
}