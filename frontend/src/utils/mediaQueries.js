import { useMediaQuery } from "react-responsive";

export const isMobile = useMediaQuery({ query: "(min-width: 480px)" });
export const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
export const isDesktop = useMediaQuery({ query: "(min-width: 1024)" });
